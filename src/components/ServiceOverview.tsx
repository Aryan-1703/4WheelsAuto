import React from "react";
import "../styles/service.css";

const ServiceOverview: React.FC = () => {
	return (
		<div className="service-overview">
			<div className="service-item">
				<h3>Quality Work</h3>
				<p>We ensure the highest quality in every repair.</p>
			</div>
			<div className="service-item">
				<h3>Heroic Service</h3>
				<p>Our team provides exceptional customer service.</p>
			</div>
			<div className="service-item">
				<h3>Satisfaction Guaranteed</h3>
				<p>Your satisfaction is our top priority.</p>
			</div>
			<div className="service-item">
				<h3>Quick Supports</h3>
				<p>We offer quick and reliable support services.</p>
			</div>
		</div>
	);
};

export default ServiceOverview;
