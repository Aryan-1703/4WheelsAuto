import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<div className="main-header">
				<div className="company-name">
					<div className="title">
						<span>4Wheels Auto</span>
						<span className="collision">Collision</span>
					</div>
				</div>
				<div className="nav-container">
					<button className="menu-toggle" onClick={toggleMenu}>
						{isMenuOpen ? "✖" : "☰"}
					</button>
					<nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
						<Link to="/" onClick={() => setIsMenuOpen(false)}>
							HOME
						</Link>
						<Link to="/services" onClick={() => setIsMenuOpen(false)}>
							SERVICES
						</Link>
						<Link to="/contact" onClick={() => setIsMenuOpen(false)}>
							CONTACT US
						</Link>
						<Link
							to="/appointment-request" 
							className="make-appointment-btn"
							onClick={() => setIsMenuOpen(false)}
						>
							Make Appointment
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
