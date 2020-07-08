import React from "react";
import { Link } from "react-router-dom";
import "./NavConsole.css";

function NavConsole() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/LOONCUP">LOONCUP</Link>
      <Link to="/LEONACUP">LEONACUP</Link>
    </div>
  );
}

export default NavConsole;
