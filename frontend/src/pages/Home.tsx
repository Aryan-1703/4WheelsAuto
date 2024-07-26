import React from "react";
import { Link } from "react-router-dom";
import ServiceOverview from "../components/service";
const Home: React.FC = () => {
	return (
		<div className="home-container">
			<main className="home-main">
				<section className="hero">
					<h1>Welcome to 4Wheels Auto Collision Center</h1>
					<p>Your trusted partner in vehicle repair and maintenance.</p>
					<Link to="/login" className="btn">
						Get Started
					</Link>
				</section>
			</main>
			<ServiceOverview />
		</div>
	);
};

export default Home;
