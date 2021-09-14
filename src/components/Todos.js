import React from "react";
import Add from "./Add.js";
import { useState } from "../context2.js";
import List from "./List.js";
import ToDo from "./ToDo.js";

const Todos = () => {
  const { toDos, completed } = useState();
  return (
    <>
      <h1>Add to Dos</h1>
      <Add />
      <List name={"To Do"}>
        {toDos.map((todo) => (
          <ToDo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
};

export default Todos;
