import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-DeviceLightEvent bg-light">
      <a href="#" className="navbar-brand">
        Navbar{""}
        <span className="badge badge-pill badge-secondary">
          {props.helloworldCount}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
