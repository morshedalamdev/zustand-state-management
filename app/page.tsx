"use client";

import AddTodoForm from "@/components/addTodoForm";
import TodoItem from "@/components/todoItem";
import TodoStats from "@/components/todoState";
import { useTodoStore } from "@/lib/todoStore";

export default function Home() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <AddTodoForm />
        <TodoStats />
        <div className="space-y-2">
            {
              todos.length === 0 ? (
                <p className="text-center text-gray-500">No todos</p>
              ): (
                todos.map((todo)=> <TodoItem key={todo.id} todo={todo} />)
              )
            }
        </div>
      </div>
    </div>
  );
}
