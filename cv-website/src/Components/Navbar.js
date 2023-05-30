import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <ul>
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
