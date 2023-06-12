import portrait from "../Assets/Images/portrait.jpg"; // Import your image here
import contactInformation from "../Assets/Text/Input/contact_data.json";

function printLinks(params) {
    if (params) {
        return (
            <div>
                {params.map((project, index) => (
                    <div key={index}>
                        <a className="hyperlink" href={project.url}>
                            {project.title}
                        </a>
                    </div>
                ))}
            </div>
        );
    }
}

function PersonProfile() {
    return (
        <div className="profile">
            <div className="portrait-component">
                <img
                    src={portrait}
                    alt="portrait"
                    style={{ borderRadius: "5%" }}
                />
            </div>
            <div className="sidebar-text">
                <h2>{contactInformation.name}</h2>
                <p className="profile-text">{contactInformation.about_me}</p>
                {printLinks(contactInformation.links)}
            </div>
        </div>
    );
}

export default PersonProfile;
