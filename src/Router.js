import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Screen from "./Screen";
import Home from "./Home";
import Todos from "./Todos";
import Inputs from "./Inputs";

const Router = () => {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/screen" component={Screen} />
      <Route path="/inputs" component={Inputs} />
      <Route path="/todos" component={Todos} />
    </HashRouter>
  );
};

export default Router;
