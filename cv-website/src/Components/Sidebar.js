import "./Sidebar.css";
import portrait from "../Assets/Images/portrait.jpg"; // Import your image here
import contactInformation from "../Assets/Text/Input/contact_data.json";

function printLinks(params) {
    if (!params) return;

    return (
        <div>
            {params.map((project, index) => (
                <div key={index}>
                    <a href={project.url}>{project.title}</a>
                </div>
            ))}
        </div>
    );
}

function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="portrait-component">
                <img src={portrait} alt="portrait" />
            </div>
            <div className="sidebar-text">
                <h2>{contactInformation.name}</h2>
                <p>{contactInformation.about_me}</p>
                {printLinks(contactInformation.links)}
            </div>
        </nav>
    );
}

export default Sidebar;
