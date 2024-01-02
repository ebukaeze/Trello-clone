"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

function FormDelete() {
  const { pending } = useFormStatus();
  return (
    <Button className="" variant="destructive" size="sm" disabled={pending}>
      Delete
    </Button>
  );
}

export default FormDelete;
