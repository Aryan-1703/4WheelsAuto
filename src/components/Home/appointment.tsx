import React, { useState } from "react";
import "../../styles/Home/appointment.css";

const Appointment: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [service, setService] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const formData = {
			name,
			email,
			phone,
			date,
			service,
		};

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setMessage("Your appointment request has been sent successfully!");
			} else {
				setMessage("There was an error sending your request. Please try again.");
			}
		} catch (error) {
			console.error("Error sending email:", error);
			setMessage("There was an error sending your request. Please try again.");
		}
	};

	return (
		<div className="appointment-container">
			<div className="appointment-card form-card">
				<h2>
					Schedule an <span className="highlight">Appointment</span>
				</h2>
				<p>Schedule an Appointment using the following form</p>
				<form onSubmit={handleSubmit}>
					<div className="form-row">
						<input
							type="text"
							placeholder="Name"
							className="name-input"
							value={name}
							onChange={e => setName(e.target.value)}
							required
						/>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-row">
						<input
							type="text"
							placeholder="Phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							required
						/>
						<input
							type="date"
							placeholder="Date"
							value={date}
							onChange={e => setDate(e.target.value)}
							required
						/>
					</div>
					<div className="input-container">
						<textarea
							id="service-input"
							placeholder="Service Needed"
							value={service}
							onChange={e => setService(e.target.value)}
							required
						></textarea>
					</div>
					<button type="submit">SEND MESSAGE</button>
				</form>
				{message && <p>{message}</p>}
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
	