import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/WorkExperience" className="nav-link">
						WorkExperience
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Education" className="nav-link">
						Education
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Skills" className="nav-link">
						Skills
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Contact" className="nav-link">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
