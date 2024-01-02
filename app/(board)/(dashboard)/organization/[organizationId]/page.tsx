"use server";

import { db } from "@/lib/db";
import CreateBoard from "@/actions/create-board";
import Board from "./board";
import { Button } from "@/components/ui/button";

const OrganizationIdPage = async () => {
  const boards = await db.board?.findMany();

  if (boards.length == 0) {
    return <div>No boards</div>;
  }

  return (
    <>
      <div>
        <CreateBoard />
        <div className="">
          {boards.map((board) => (
            <Board key={board.id} title={board.title} id={board.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OrganizationIdPage;
