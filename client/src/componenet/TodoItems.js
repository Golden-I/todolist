import React from "react";

function TodoItems({
  todos,
  editingIndex,
  handleToggleTodo,
  handleDeleteTodo,
  handleEditTodo,
}) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span
            className={todo.completed ? "completed" : ""}
            onClick={() => handleToggleTodo(index)}
          >
            {todo.text}
          </span>
          <div className="buttons-container">
            {!todo.completed && editingIndex !== index && (
              <button
                className="edit-button"
                onClick={() => handleEditTodo(index)}
              >
                Edit
              </button>
            )}
            {!todo.completed && (
              <button
                className="done-button"
                onClick={() => handleToggleTodo(index)}
              >
                Done
              </button>
            )}
            <button
              className="delete-button"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
