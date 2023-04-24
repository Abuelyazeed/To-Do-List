import React from "react";
import ToDo from "./ToDo";
import "./ToDoList.css";

function ToDoList({ toDoList, handleToggle, handleFilter }) {
  return (
    <div className="container list">
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} />;
      })}

      <button className="clear-btn" onClick={handleFilter}>
        Clear Completed Tasks
      </button>
    </div>
  );
}

export default ToDoList;
