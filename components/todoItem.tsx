"use client";

import { Todo } from "@/types/todo";
import { useState } from "react";

export default function TodoItem({ todo }: { todo: Todo }) {
  const handleSaveEdit = () => {};

  const handleCancelEdit = () => {};

  return (
    <div
      className={`flex items-center gap-3 p-3 border rounded-lg ${
        todo.completed
          ? "bg-gray-50 border-gray-200"
          : "bg-white border-gray-300"
      }`}
    >
      {/* checkbox */}
      <input
        type="checkbox"
        className="w-5 h-5 text-blue-600"
        checked={todo.completed}
      />
      {/* text todo */}
      <div className="flex-1">
        <input
          onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
          className="w-full px-2 py-1 border rounded"
          autoFocus
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      {/* action button */}
      <div className="flex gap-1">
        <button
          onClick={handleSaveEdit}
          className="p-1 text-blue-600 hover:bg-blue-100 rounded"
        >
          ✅
        </button>
        <button
          onClick={handleCancelEdit}
          className="p-1 text-red-600 hover:bg-red-100 rounded"
        >
          ❌
        </button>
        <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
          ✏️
        </button>
        <button className="p-1 text-red-600 hover:bg-red-100 rounded">
          🗑️
        </button>
      </div>
    </div>
  );
}
