import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "./../styles/Todo.css";

export default function Home({ mode }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const editTask = (index, newText) => {
    const updated = [...tasks];
    updated[index] = newText;
    setTasks(updated);
  };

  return (
    <div className={`todo-container ${mode}`}>
      <h2>My Todos ✅</h2>
      <TodoForm onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}
