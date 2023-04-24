import React from "react";

function ToDo({ todo }) {
  return (
    <div>
      <p>{todo.task}</p>
    </div>
  );
}

export default ToDo;
