import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./navbar.css";
import { NavItem, NavLink } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

function NavDropdownExample() {
    return (
      <Nav className="background touch" card fill pills>
        <NavItem className="touch">
          <NavLink className="background bebas-neue-regular " href="/studentsform" path="/">
            Create Student Profile
          </NavLink>
        </NavItem>
        <NavItem className="active bebas-neue-regular" path="/login">
          <NavLink className="background" href="/teachersform">
            Create Teacher Profile
          </NavLink>
        </NavItem>
      </Nav>
    );
}

export default NavDropdownExample;