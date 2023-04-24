import React from "react";
import { useState } from "react";
import "./ToDoForm.css";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter task..."
        onChange={handleChange}
        value={userInput}
        className="inputField"
      ></input>
      <button className="submit-btn" onClick={handleSubmit} type="button">
        Submit
      </button>
    </div>
  );
}

export default ToDoForm;
