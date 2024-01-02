"use server";
import { db } from "@/lib/db";

import * as z from "zod";
import { BoardFormSchema } from "@/components/formSchema/schema";
import { revalidatePath } from "next/cache";

type Inputs = z.infer<typeof BoardFormSchema>;

export async function addEntry(data: Inputs) {
  const result = BoardFormSchema.safeParse(data);

  if (result.success) {
    await db.board.create({
      data: {
        title: result.data.title,
      },
    });
    revalidatePath("/organization/org_2Z3F48sp2ZKpm8oSNbJzYMePAPg");

    return { success: true, data: result.data };
  }
  if (result.error) {
    return {
      success: false,
      error: result.error.flatten().fieldErrors,
      message: "database connection error",
    };
  }
}
