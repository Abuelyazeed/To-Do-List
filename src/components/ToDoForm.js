import React from "react";
import { useState } from "react";

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
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter task..."
          onChange={handleChange}
          value={userInput}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ToDoForm;
