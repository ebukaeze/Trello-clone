import { z } from "zod";

export const BoardFormSchema = z.object({
  title: z.string().min(3, "board name must have a minimum of 3 characters"),
});
