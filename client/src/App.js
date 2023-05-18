import React, { useState } from "react";
import TodoForm from "./componenet/TodoForm";
import TodoItems from "./componenet/TodoItems";

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
      <TodoForm
        editingIndex={editingIndex}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        handleUpdateTodo={handleUpdateTodo}
      />
      <TodoItems
        todos={todos}
        editingIndex={editingIndex}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default TodoList;
