import React from "react";
import Lang from "../context";
import translations from "../translations";
import Router from "../Router";

function App() {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Router />
    </Lang>
  );
}

export default App;
