import React from "react";
import "../styles/apointment.css";

const Appointment: React.FC = () => {
	return (
		<div className="appointment-container">
			<div className="appointment-card form-card">
				<h2>
					Schedule an <span className="highlight">Appointment</span>
				</h2>
				<p>Schedule an Appointment using the following form</p>
				<form>
					<div className="form-row">
						<input type="text" placeholder="Name" className="name-input" />
						<input type="email" placeholder="Email" />
					</div>
					<div className="form-row">
						<input type="text" placeholder="Phone" />
						<input type="date" placeholder="Date" />
					</div>
					<div className="input-container">
						<textarea id="service-input" placeholder="Service Needed"></textarea>
					</div>
					<button type="submit">SEND MESSAGE</button>
				</form>
			</div>
			<div className="appointment-card contact-card">
				<h2>
					Make a <span className="highlight">Phone Call</span>
				</h2>
				<p>Schedule an Appointment using the following phone number</p>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type.
				</p>
				<p>
					<a href="tel:+19054578813" className="highlight">
						+1 (905) 457-8813
					</a>
				</p>
				<p>
					<a href="mailto:4WheelsAutoCollision@domain.com" className="highlight">
						4WheelsAutoCollision@domain.com
					</a>
				</p>
				<h3>Opening Hours</h3>
				<p>Monday - Friday: 9:00AM - 5:00PM</p>
			</div>
		</div>
	);
};

export default Appointment;
