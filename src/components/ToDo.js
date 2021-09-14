import React from "react";
import { COMPLETE, DEL, UNCOMPLETE } from "../action";
import { useDispatch } from "../context2";

const ToDo = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>❌</button>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? " 🙅🏼‍♂️" : "✅"}
      </button>
    </li>
  );
};

export default ToDo;
