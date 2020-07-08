import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./route/Home";
import NavConsole from "./components/NavConsole";
import LOONCUP from "./route/Looncup";

function App() {
  return (
    <HashRouter>
      <NavConsole />
      <Route path="/" exact={true} component={Home} />
      <Route path="/LOONCUP" exact={true} component={LOONCUP} />
    </HashRouter>
  );
}

export default App;
