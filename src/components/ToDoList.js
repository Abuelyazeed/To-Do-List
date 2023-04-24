import React from "react";
import ToDo from "./ToDo";

function ToDoList({ toDoList, handleToggle, handleFilter }) {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} />;
      })}

      <button onClick={handleFilter}>Clear Completed Tasks</button>
    </div>
  );
}

export default ToDoList;
