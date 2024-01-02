"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BoardFormSchema } from "@/components/formSchema/schema";
import { addEntry } from "@/app/api/_actions";
import { useState } from "react";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";

type FormData = z.infer<typeof BoardFormSchema>;

function CreateBoard() {
  const { pending } = useFormStatus();
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(BoardFormSchema),
    defaultValues: {
      title: "",
    },
  });

  const processForm: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    const result = await addEntry(data);
    if (!result) {
      console.log("something went wrong");
      return;
    }
    if (!result.success) {
      setErrMsg(result.message || "");
      return;
    }
    if (result.success) {
      setIsLoading(false);
      form.reset();
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className="flex items-center justify-center gap-x-2 w-full h-max"
        >
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter a Board Name"
                    type="text"
                    {...field}
                    className="py-4 h-14 pl-8 rounded-sm bg-gray-50 text-neutral-600 font-medium peer placeholder:text-neutral-400 placeholder:font-base placeholder:text-sm"
                    disabled={pending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="sm"
            variant="default"
            className="flex items-center h-auto py-4 peer-focus:border-gray-700"
            disabled={pending}
          >
            {isLoading ? <Loader2Icon /> : "Add"}
          </Button>
          {errMsg}
        </form>
      </Form>
    </div>
  );
}

export default CreateBoard;
