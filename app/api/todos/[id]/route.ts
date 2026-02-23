import prisma from "@/lib/prisma";
import { Todo } from "@/types/todo";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;

    await prisma.todo.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete todo" },
      { status: 500 },
    );
  }
}

export async function PUT(
  _req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;
    const body = await _req.json();
    const updatedData: Partial<Pick<Todo, "title" | "completed">> = {};

    if (body.title !== undefined) updatedData.title = body.title;
    if (body.completed !== undefined) updatedData.completed = body.completed;

    const todo = await prisma.todo.update({ where: { id }, data: updatedData });
    return NextResponse.json({
      success: true,
      data: todo,
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update todo" },
      { status: 500 },
    );
  }
}
