import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async data => {
		try {
			const response = await axios.post(
				"https://4wheelsautocollision.com/backend/api/send-email",
				data,
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
				reset();
			}, 3500);
		} catch (error) {
			console.error("Error:", error);
			setMessage("An error occurred. Please try again later.");
		}
	};

	const [message, setMessage] = React.useState("");
	const [showDialog, setShowDialog] = React.useState(false);

	return (
		<div className="appointment-container">
			<div className="appointment-card form-card">
				<h2>
					Request an <span className="highlight">Appointment</span>
				</h2>
				<p>Request an Appointment using the following form</p>
				{message && <p className="message">{message}</p>}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-row">
						<input
							type="text"
							{...register("name", { required: "Name is required" })}
							placeholder="Name"
							className={`name-input ${errors.name ? "invalid" : ""}`}
						/>
						{errors.name && <span className="error-message">{errors.name.message}</span>}

						<input
							type="email"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Invalid email address",
								},
							})}
							placeholder="Email"
							className={`email-input ${errors.email ? "invalid" : ""}`}
						/>
						{errors.email && (
							<span className="error-message">{errors.email.message}</span>
						)}
					</div>
					<div className="form-row">
						<input
							type="text"
							{...register("phone", { required: "Phone number is required" })}
							placeholder="Phone"
							className={`phone-input ${errors.phone ? "invalid" : ""}`}
						/>
						{errors.phone && (
							<span className="error-message">{errors.phone.message}</span>
						)}

						<input
							type="date"
							{...register("date", { required: "Date is required" })}
							placeholder="Date"
							className={`date-input ${errors.date ? "invalid" : ""}`}
						/>
						{errors.date && <span className="error-message">{errors.date.message}</span>}
					</div>
					<div className="input-container">
						<textarea
							id="service-input"
							{...register("service", { required: "Service needed is required" })}
							placeholder="Service Needed"
							className={`service-input ${errors.service ? "invalid" : ""}`}
						></textarea>
						{errors.service && (
							<span className="error-message">{errors.service.message}</span>
						)}
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
				<p>
					At 4Wheels Auto Collision, we are here to assist you with scheduling your
					vehicle repair or collision repair services. Call us today to speak with one of
					our friendly team members who will help you set up a convenient appointment
					time. We look forward to helping you get your vehicle back on the road.
				</p>
				<br />
				<p>To request an appointment, please call us at:</p>
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
				<p>Monday - Friday: 9:00 AM - 5:00 PM</p>
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
