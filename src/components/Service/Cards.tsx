import React from "react";
import "../../styles/Services/card.css";

const Cards = () => {
	return (
		<div className="service-cards">
			<div className="service-card">
				{/* <img src={tow} alt="Tow Service" className="card-img" /> */}
				<div className="service-card-text">Towing and Rental Service</div>
				<p className="service-card-desc">
					Our Towing and Rental Service ensures that you are never stranded. We provide
					prompt and reliable towing services and offer rental vehicles to keep you moving
					while your car is being repaired.
				</p>
			</div>
			<div className="service-card">
				{/* <img src={heroservice} alt="Repair Service" className="card-img" /> */}
				<div className="service-card-text">Heroic Service</div>
				<p className="service-card-desc">
					Experience our Heroic Service, where we go above and beyond to ensure your
					vehicle is restored to its best condition. Our skilled technicians handle every
					repair with precision and care.
				</p>
			</div>
			<div className="service-card">
				{/* <img src={detailing} alt="Maintenance Service" className="card-img" /> */}
				<div className="service-card-text">Detailing and Restoration</div>
				<p className="service-card-desc">
					Our Detailing and Restoration service brings your vehicle back to life. We
					provide comprehensive detailing and restoration to make your car look and feel
					brand new.
				</p>
			</div>
		</div>
	);
};

export default Cards;
