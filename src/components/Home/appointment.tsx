import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import "../../styles/Home/apointment.css";

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
	const [showDialog, setShowDialog] = useState(false);
	const [invalidFields, setInvalidFields] = useState<string[]>([]);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	const validateForm = () => {
		const { name, email, phone, date, service } = formData;
		const missingFields = [];
		if (!name) missingFields.push("name");
		if (!email) missingFields.push("email");
		if (!phone) missingFields.push("phone");
		if (!date) missingFields.push("date");
		if (!service) missingFields.push("service");

		setInvalidFields(missingFields);

		return missingFields.length === 0;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);
		setMessage("");

		try {
			const response = await axios.post(
				"4WheelsAutocollision.com/api/send-email",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setMessage(response.data);
			setShowDialog(true);

			// Hide dialog after 2 seconds
			setTimeout(() => {
				setShowDialog(false);
				setFormData({ name: "", email: "", phone: "", date: "", service: "" });
				setInvalidFields([]);
			}, 3500);
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
							className={`name-input ${invalidFields.includes("name") ? "invalid" : ""}`}
							value={formData.name}
							onChange={handleChange}
							disabled={isSubmitting}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className={invalidFields.includes("email") ? "invalid" : ""}
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
							className={invalidFields.includes("phone") ? "invalid" : ""}
							value={formData.phone}
							onChange={handleChange}
							disabled={isSubmitting}
						/>
						<input
							type="date"
							name="date"
							placeholder="Date"
							className={invalidFields.includes("date") ? "invalid" : ""}
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
							className={invalidFields.includes("service") ? "invalid" : ""}
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
			{showDialog && (
				<>
					<div className="dialog-overlay"></div>
					<div className="dialog">
						<p>
							Thank you for your message. We have received your appointment request and
							will get back to you as soon as possible.
						</p>
						<p>If you have any urgent questions, feel free to contact us directly.</p>
					</div>
				</>
			)}
		</div>
	);
};

export default Appointment;
