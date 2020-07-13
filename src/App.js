import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./route/Home";
import NavConsole from "./components/NavConsole";
import LOONCUP from "./route/Looncup";
import Leonacup from "./route/Leonacup";
import Contact from "./route/Contact";

function App() {
  return (
    <HashRouter>
      <NavConsole />
      <Route path="/" exact={true} component={Home} />
      <Route path="/LOONCUP" exact={true} component={LOONCUP} />
      <Route path="/LEONACUP" exact={true} component={Leonacup} />
      <Route path="/CONTACTUS" exact={true} component={Contact} />
    </HashRouter>
  );
}

export default App;
