import React from "react";

function TodoForm({
  editingIndex,
  inputValue,
  handleInputChange,
  handleFormSubmit,
  handleUpdateTodo,
}) {
  return (
    <form
      onSubmit={editingIndex !== null ? handleUpdateTodo : handleFormSubmit}
    >
      <input
        type="text"
        placeholder={editingIndex !== null ? "Update task" : "Enter a task"}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">{editingIndex !== null ? "Update" : "Add"}</button>
    </form>
  );
}

export default TodoForm;
