// frontend/src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
	return (
		<div className="home-container">
			<header className="home-header">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
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
