import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import React from "react";
import FormDelete from "./_components/form-delete";

interface BoardProps {
  title: string;
  id: string;
}

function Board({ title, id }: BoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form
      className="flex items-center gap-x-2 justify-between py-3 max-h-60 overflow-y-auto"
      action={deleteBoardWithId}
    >
      <p className="text-sm font-bold text-neutral-700">Board title: {title}</p>
      <FormDelete />
    </form>
  );
}

export default Board;
