import React from "react";
import "../styles/service.css";
import tow from "../images/tow.png";
import heroservice from "../images/heroservice.jpg";
import detailing from "../images/detailing.jpg";

const ServiceOverview: React.FC = () => {
	return (
		<div className="service-container">
			<h1>Our Services</h1>
			<h3>We Offer a Wide range of Services that will satisfy each of our clients.</h3>
			<div className="cards">
				<div className="card">
					<img src={tow} alt="Tow Service" className="card-img" />
					<div className="card-text">Towing and Rental Service</div>
					<p className="card-desc">
						Our Towing and Rental Service ensures that you are never stranded. We provide
						prompt and reliable towing services and offer rental vehicles to keep you
						moving while your car is being repaired.
					</p>
				</div>
				<div className="card">
					<img src={heroservice} alt="Repair Service" className="card-img" />
					<div className="card-text">Heroic Service</div>
					<p className="card-desc">
						Experience our Heroic Service, where we go above and beyond to ensure your
						vehicle is restored to its best condition. Our skilled technicians handle
						every repair with precision and care.
					</p>
				</div>
				<div className="card">
					<img src={detailing} alt="Maintenance Service" className="card-img" />
					<div className="card-text">Detailing and Restoration</div>
					<p className="card-desc">
						Our Detailing and Restoration service brings your vehicle back to life. We
						provide comprehensive detailing and restoration to make your car look and feel
						brand new.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceOverview;
