import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import companyLogo from "../img/loonlab.jpg";
import "./Navigation.css";

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="NavBar">
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="nav-2" />
        <a href="#/">
        <img src={companyLogo} alt="BrandName" />
        </a>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/LOONCUP">LOONCUP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/LEONACUP">LEONACUP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/CONTACTUS">CONTACT US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
