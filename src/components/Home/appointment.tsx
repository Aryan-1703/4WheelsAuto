import React, { useState, ChangeEvent, FormEvent } from "react";
import "../../styles/Home/appointment.css"; // Corrected file name

interface FormData {
	name: string;
	email: string;
	phone: string;
	date: string;
	service: string;
}

const Appointment: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		date: "",
		service: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	const validateForm = () => {
		const { name, email, phone, date, service } = formData;
		if (!name || !email || !phone || !date || !service) {
			setMessage("Please fill in all fields.");
			return false;
		}
		return true;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);
		setMessage("");

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const result = await response.text();
			setMessage(result);
		} catch (error) {
			console.error("Error:", error);
			setMessage("An error occurred. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="appointment-container">
			<div className="appointment-card form-card">
				<h2>
					Schedule an <span className="highlight">Appointment</span>
				</h2>
				<p>Schedule an Appointment using the following form</p>
				{message && <p className="message">{message}</p>}
				<form onSubmit={handleSubmit}>
					<div className="form-row">
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="name-input"
							value={formData.name}
							onChange={handleChange}
							disabled={isSubmitting}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							disabled={isSubmitting}
						/>
					</div>
					<div className="form-row">
						<input
							type="text"
							name="phone"
							placeholder="Phone"
							value={formData.phone}
							onChange={handleChange}
							disabled={isSubmitting}
						/>
						<input
							type="date"
							name="date"
							placeholder="Date"
							value={formData.date}
							onChange={handleChange}
							disabled={isSubmitting}
						/>
					</div>
					<div className="input-container">
						<textarea
							id="service-input"
							name="service"
							placeholder="Service Needed"
							value={formData.service}
							onChange={handleChange}
							disabled={isSubmitting}
						></textarea>
					</div>
					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Submitting..." : "SEND MESSAGE"}
					</button>
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
