import React, { useReducer, useState } from "react";
import reducer, {
  initialState,
  ADD,
  DEL,
  COMPLETE,
  UNCOMPLETE,
} from "./reducer.js";

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <div>
      <h1>Add to Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          onChange={onChange}
          type="text"
          placeholder="Write to do"
        ></input>
      </form>

      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: todo.id })}>
              💥
            </button>
            <button
              onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}
            >
              ✔
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button
                  onClick={() => dispatch({ type: DEL, payload: todo.id })}
                >
                  💥
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: todo.id })
                  }
                >
                  💔
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Todos;
