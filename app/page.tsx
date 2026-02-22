"use client";

import AddTodoForm from "@/components/addTodoForm";
import TodoStats from "@/components/todoState";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <AddTodoForm />
        <TodoStats />
        <div className="space-y-2">
            <p className="text-center text-gray-500">No todos</p>
        </div>
      </div>
    </div>
  );
}
