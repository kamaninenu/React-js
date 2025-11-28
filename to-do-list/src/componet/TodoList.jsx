import React from "react";
import TodoBox from "./TodoBox"; // ✅ Correct import

export default function TodoList({ tasks, onDelete, onEdit }) {
  return (
    <div className="todo-list">
      {tasks.map((task, i) => (
        <TodoBox
          key={i}
          text={task}
          onDelete={() => onDelete(i)}
          onEdit={() => {
            const newText = prompt("Edit Task:", task);
            if (newText) onEdit(i, newText);
          }}
        />
      ))}
    </div>
  );
}
