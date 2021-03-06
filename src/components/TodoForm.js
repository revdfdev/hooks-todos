import React, { useState, useContext } from "react";
import TodoContext from "../context";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <input
        type="text"
        onChange={e => setTodo(e.target.value)}
        className="border-black border-solid border-2"
      />
    </form>
  );
}
