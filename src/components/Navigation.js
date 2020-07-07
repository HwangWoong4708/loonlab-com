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
        <img src={companyLogo} alt="BrandName" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">WELCOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">LOONCUP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">LEONACUP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">CONTACT US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
