import "./Sidebar.css";
import PersonProfile from "./PersonProfile";

function Sidebar() {
    return (
        <nav className="sidebar">
            <PersonProfile />
        </nav>
    );
}

export default Sidebar;
