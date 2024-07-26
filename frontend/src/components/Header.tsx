import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
	logo: React.ReactNode; // Accept React element for the logo
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
	return (
		<header className="home-header">
			<nav className="navbar">
				<div className="navbar-left">
					{logo}
					<h2 className="business-name">
						4Wheels Auto Collision
						<br />
						Brampton
					</h2>
				</div>
				<ul className="navbar-right">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/appointment">Book An Appointment</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
