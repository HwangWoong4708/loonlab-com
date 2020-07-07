import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./route/Home";
import NavConsole from "./components/NavConsole";

function App() {
  return (
    <HashRouter>
      <NavConsole />
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  );
}

export default App;
