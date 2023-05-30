import React, { useState } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`nav ${showMenu ? "show-menu" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
      </div>
      <ul className="menu">
        <CustomLink to="/WorkExperience">WorkExperience</CustomLink>
        <CustomLink to="/Education">Education</CustomLink>
        <CustomLink to="/Skills">Skills</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : "inactive"}>
            <Link to={to}>{children}</Link>
        </li>
    );
}

export default Navbar;
