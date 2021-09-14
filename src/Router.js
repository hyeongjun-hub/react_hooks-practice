import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Screen from "./Screen";
import Home from "./Home";
import Todos from "./components/Todos";
import Inputs from "./Inputs";
import ToDosProvider from "./context2";

const Router = () => {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/screen" component={Screen} />
      <Route path="/inputs" component={Inputs} />
      <ToDosProvider>
        <Route path="/todos" component={Todos} />
      </ToDosProvider>
    </HashRouter>
  );
};

export default Router;
