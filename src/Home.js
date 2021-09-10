import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const A = styled.div`
  all: unset;
  color: Gray;
  margin-right: 20px;
`;

const Home = () => {
  return (
    <>
      <Link to="/">
        <A>Go Home</A>
      </Link>
      <Link to="/screen">
        <A>Go Translation</A>
      </Link>
      <Link to="/inputs">
        <A>Go Inputs</A>
      </Link>
      <Link to="/todos">
        <A>Go Todos</A>
      </Link>
      <h5 style={{ marginLeft: "20px" }}>React hooks practice</h5>
    </>
  );
};

export default Home;
