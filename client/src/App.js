import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue.trim(), completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setEditingIndex(null);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    setEditingIndex(null);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setInputValue(todos[index].text);
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos(
        todos.map((todo, i) =>
          i === editingIndex ? { ...todo, text: inputValue.trim() } : todo
        )
      );
      setInputValue("");
      setEditingIndex(null);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form
        onSubmit={editingIndex !== null ? handleUpdateTodo : handleFormSubmit}
      >
        <input
          type="text"
          placeholder={editingIndex !== null ? "Update task" : "Enter a task"}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </form>
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
    </div>
  );
}

export default TodoList;
