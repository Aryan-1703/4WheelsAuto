import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Services/index.css";

const servicesData = [
	{
		icon: (
			<img src="./images/ServicePage/collision.png" alt="Tool Icon" className="icon-image" />
		),
		title: "Collision & Auto Body Repair",
		description:
			"From scratches or dents to major damage due to an auto collision, we are equipped with state-of-the-art equipment and licensed technicians to be your collision repair experts. We will help you navigate the repair process, from dealing with an insurance company, to a professional estimate and final repair.",
	},
	{
		icon: <img src="./images/ServicePage/scratch.png" alt="Tool Icon" className="icon-image" />,
		title: "Scratch & Dent Repair",
		description:
			"We know how important it is to have your car in like-new condition. Whether a runaway shopping cart found your door, or a hailstorm used your hood for target practice, we’ll take care of those blemishes no matter how big or small.",
	},
	{
		icon: <img src="./images/ServicePage/window.png" alt="Tool Icon" className="icon-image" />,
		title: "Windshield & Glass Repair",
		description:
			"From broken windows to shattered glass, damaged sideview/rear-view mirrors or windows, we have the tools to get you back in your vehicle safely and quickly. Our licensed and trained glass technicians will repair or replace glass on your vehicle no matter the extent of the damage.",
	},
	{
		icon: <img src="./images/ServicePage/paint.png" alt="Tool Icon" className="icon-image" />,
		title: "Vehicle Paint",
		description:
			"Our vehicle paint specialists and high-tech equipment will make sure your vehicle paint is expertly applied and perfectly matched. Trust us to take care of your vehicle and have it restored to its best condition.",
	},
	{
		icon: (
			<img src="./images/ServicePage/paintdent.png" alt="Tool Icon" className="icon-image" />
		),
		title: "Paintless Dent Repair",
		description:
			"Paintless dent repair is often a less expensive alternative to remove minor dents without the need for a full paint job. Bring your vehicle to us for a free estimate or schedule an appointment today!",
	},
	{
		icon: <img src="./images/ServicePage/towing.png" alt="Tool Icon" className="icon-image" />,
		title: "24-Hour Towing",
		description:
			"Accidents happen. You can trust our 24-Hour towing services to transport your car to the location of your choice. Call us for towing assistance. No matter what happens, trust us. We’ll straighten it out.",
	},
];

const ServicesPage: React.FC = () => {
	const navigate = useNavigate();

	const handleContactClick = () => {
		navigate("/contact", { state: { scrollToAppointment: true } });
	};

	return (
		<div>
			<div className="Service-page-image">
				{" "}
				<h2>Services</h2>
			</div>
			<div className="service-page-container">
				<div className="service-cards-container">
					{servicesData.map((service, index) => (
						<div className="service-card" key={index}>
							<div className="service-icon">{service.icon}</div>
							<h3 className="service-title">{service.title}</h3>
							<p className="service-description">{service.description}</p>
							<button onClick={handleContactClick}>Contact Us</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
