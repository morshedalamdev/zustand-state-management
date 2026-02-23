"use client";

import { useTodoStore } from "@/lib/todoStore";
import { Todo } from "@/types/todo";
import { useState } from "react";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const handleSaveEdit = () => {
    if (editText.trim()) {
      updateTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditText(todo.title);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center gap-3 p-3 border rounded-lg ${
        todo.completed
          ? "bg-gray-100 border-gray-300"
          : "bg-white border-gray-300"
      }`}
    >
      {/* checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-5 h-5 text-blue-600"
      />
      {/* text todo */}
      <div className="flex-1">
        {isEditing ? (
          <input
            autoFocus
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
            className="w-full px-2 py-1 border rounded text-black"
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>
      {/* action button */}
      <div className="flex gap-1">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              className="p-1 text-blue-600 rounded"
            >
              ✅
            </button>
            <button
              onClick={handleCancelEdit}
              className="p-1 text-red-600 rounded"
            >
              ❌
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-blue-600 rounded"
            >
              ✏️
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 text-red-600 rounded"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}
