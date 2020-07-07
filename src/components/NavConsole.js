import React from "react";
import { Link } from "react-router-dom";
import "./NavConsole.css";

function NavConsole() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/LOONCUP">LoonCup</Link>
      <Link to="/LEONACUP">LEONACUP</Link>
    </div>
  );
}

export default NavConsole;
