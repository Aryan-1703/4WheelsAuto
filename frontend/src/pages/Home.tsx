import React from "react";
import "../styles/Home.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className="home-container">
			<nav className="top-nav fulltext">
				<div>
					<a href="/request-quote">Book Appointment →</a>&nbsp;&nbsp;
				</div>
				<div>
					<div className="text-align-right">
						<span style={{ verticalAlign: "top" }}>
							Call Now:{" "}
							<strong>
								<a href="tel:+19054578813"> (905) 457-8813</a>
							</strong>
							&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{" "}
							<a href="/contact">Get Directions →</a>
						</span>
					</div>
				</div>
			</nav>
			<header className="home-header">
				<nav>
					<ul>
						<li className="list-item">
							<img src={logo} alt="4Wheels Auto Collision Logo" className="logo" />
							<h2>
								4Wheels Auto Collision
								<br />
								Brampton
							</h2>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className="home-main">
				<section className="hero">
					<h1>Welcome to 4Wheels Auto Collision Center</h1>
					<p>Your trusted partner in vehicle repair and maintenance.</p>
					<Link to="/login" className="btn">
						Get Started
					</Link>
				</section>
			</main>
			<footer className="home-footer">
				<p>&copy; 2024 4Wheels Auto Collision Center. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Home;
