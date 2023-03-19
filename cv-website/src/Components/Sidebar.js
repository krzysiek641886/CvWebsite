import "./Sidebar.css"
import portrait from '../Assets/Images/portrait.jpg'; // Import your image here

function Sidebar() {
	return (
		<nav className="sidebar">
			<h1>Look at this sexy guy!</h1>
			<div className="portrait-component">
				<img src={portrait} alt="My Image" />
			</div>
			<div className="sidebar-text">
				<p>Interesting facts about this sexy guy!</p>
				<p>Even more interesting facts about this sexy guy!</p>
			</div>

		</nav>
	);
}

export default Sidebar;
