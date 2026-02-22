"use client";

import { useEffect, useState } from "react";

export default function TodoStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  }, []);

  if (!mounted) {
    return <div className="mb-4 text-gray-500">Loading...</div>;
  }

  return (
    <div className="mb-4 text-center">
      <div className="inline-flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600">
        <span>📋 Total: </span>
        <span>⏳ Active: </span>
        <span>✅ Completed: </span>
      </div>
    </div>
  );
}