import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from "../images/logo3.jpg";

const Home: React.FC = () => {
	return (
		<div className="home-container">
			<nav className="top-nav fulltext">
				<div className="limit-wrapper top-nav-inner">
					<div className="row">
						<div className="row single-cell">
							<div className="grid-1-1" id="top-nav-text">
								<div className="row">
									<div
										className="wpv-grid grid-1-2 wpv-first-level first unextended"
										style={{ paddingTop: "0px", paddingBottom: "0px" }}
										id="wpv-column-14db46f5479d20621a66ae99f018607d"
									>
										<a href="/request-quote">Book Appointment →</a>&nbsp;&nbsp;
									</div>
									<div
										className="wpv-grid grid-1-2 wpv-first-level unextended"
										style={{ paddingTop: "0px", paddingBottom: "0px" }}
										id="wpv-column-4630e7189e8fca43b90e71810dd664c5"
									>
										<div className="text-align-right">
											<span style={{ verticalAlign: "top" }}>
												Call Now:{" "}
												<strong>
													<a href="tel:+19054571684">905-457-1684</a>
												</strong>
												&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{" "}
												<a href="/contact">Get Directions →</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
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
