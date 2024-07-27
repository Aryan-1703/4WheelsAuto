import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="top-bar">
				<div className="contact-info">
					<span>
						<a href="tel:+19054578813">+1 (905) 457-8813</a>
					</span>
					<span>
						<a href="https://www.google.com/maps/place/42+Stafford+Dr,+Brampton,+ON" target="_blank">42 Stafford Dr, Brampton</a>
					</span>
					<span>
						<a href="http://4WheelsAutoCollision.com" target="_blank">4WheelsAutoCollision.com</a>
					</span>
				</div>
				<div className="social-links">
					<span>Mon - Fri 9:00 AM - 5:00 PM</span>
				</div>
			</div>
			<div className="main-header">
				<div className="company-name">
					<div className="title">
						<span>4Wheels Auto</span>
						<span className="collision">Collision</span>
					</div>
				</div>
				<div className="nav-container">
					<nav className="nav-links">
						<Link to="/">HOME</Link>
						<Link to="/contact">CONTACT US</Link>
					</nav>
					<Link to="/appointment" className="make-appointment-btn">
						Make Appointment
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
