import React, { useState } from "react";
import { ADD } from "../action";
import { useDispatch } from "../context2";

const Add = () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();
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
    <form onSubmit={onSubmit}>
      <input
        value={newToDo}
        onChange={onChange}
        type="text"
        placeholder="Write to do"
      ></input>
    </form>
  );
};

export default Add;
