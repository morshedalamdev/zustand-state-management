"use client";

import { useState } from "react";

export default function AddTodoForm() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
  };

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        className="flex-1 px-4 py-2 border rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        ➕
      </button>
    </div>
  );
}