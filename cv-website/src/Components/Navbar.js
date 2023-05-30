import React, { useState } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : "inactive"}>
            <Link to={to}>{children}</Link>
        </li>
    );
}

function RenderMenu({ isMobile, showMenu }) {
    if (isMobile) {
        return <CustomLink to="/">Personal Info</CustomLink>;
    }
}

function Navbar({ isMobile }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="nav">
            <div className="menu-toggle">
                <button className="toggle-button" onClick={toggleMenu}>
                    =
                </button>
            </div>
            <ul className={`horizontal-menu ${showMenu ? "show-menu" : ""}`}>
                <RenderMenu isMobile={isMobile} showMenu={showMenu} />
                <CustomLink to="/WorkExperience">WorkExperience</CustomLink>
                <CustomLink to="/Education">Education</CustomLink>
                <CustomLink to="/Skills">Skills</CustomLink>
            </ul>
        </nav>
    );
}

export default Navbar;
