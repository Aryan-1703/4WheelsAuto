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
						<Link to="/">
							<img
								src="../images/4Wheelsauto.png"
								alt="4Wheels Auto Collision"
								className="logo-image"
							/>
						</Link>
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
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
