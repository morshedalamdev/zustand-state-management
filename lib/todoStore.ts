import { Todo } from "@/types/todo";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, newText: string) => void;
  getTodoStats: () => {
    total: number;
    active: number;
    completed: number;
  };
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      // CREATE
      addTodo: (title: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now().toString(),
              title,
              completed: false,
              createdAt: new Date(),
            },
          ],
        })),
      // DELETE
      deleteTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      // UPDATE TOGGLE
      toggleTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),
      // UPDATE EDIT
      updateTodo: (id: string, newText: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, title: newText } : todo,
          ),
        })),
      // COMPUTED VALUE
      getTodoStats: () => {
        const { todos } = get();
        return {
          total: todos.length,
          active: todos.filter((todo) => !todo.completed).length,
          completed: todos.filter((todo) => todo.completed).length,
        };
      },
    }),
    { name: "todo-storage" },
  ),
);
