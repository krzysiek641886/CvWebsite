import "./Sidebar.css"
import portrait from '../Assets/Images/portrait.jpg'; // Import your image here
import contactInformation from "../Assets/Text/Input/contact_data.json";

function Sidebar() {
	return (
		<nav className="sidebar">
			<h1>Look at this sexy guy!</h1>
			<div className="portrait-component">
				<img src={portrait} alt="My Image" />
			</div>
			<div className="sidebar-text">
				{JSON.stringify(contactInformation)}
			</div>

		</nav>
	);
}

export default Sidebar;
