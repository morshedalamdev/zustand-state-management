import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: todos,
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch todos" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title } = body;
    if (!title || typeof title !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid todo title" },
        { status: 400 },
      );
    }

    const todo = await prisma.todo.create({
     data: {
          title: title.trim(),
     }
    })
    return NextResponse.json({
      success: true,
      data: todo,
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create todo" },
      { status: 500 },
    );
  }
}
