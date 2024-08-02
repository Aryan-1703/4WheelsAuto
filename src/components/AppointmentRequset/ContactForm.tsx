import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import "../../styles/AppointmentRequest/ContactForm.css";

// Define the form data type
interface FormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

const ContactForm: React.FC = () => {
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
			// setShowDialog(true);

			// Hide dialog after 2 seconds
			setTimeout(() => {
				// setShowDialog(false);
				reset();
			}, 3500);
		} catch (error) {
			console.error("Error:", error);
			setMessage("An error occurred. Please try again later.");
		}
	};

	const [message, setMessage] = React.useState<string>("");

	return (
		<form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="input-group">
				<input
					type="text"
					placeholder="Name"
					{...register("name", { required: "Name is required" })}
				/>
				{errors.name && <p className="error">{errors.name.message}</p>}

				<input
					type="email"
					placeholder="E-mail"
					{...register("email", {
						required: "E-mail is required",
						pattern: {
							value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
							message: "Enter a valid e-mail address",
						},
					})}
				/>
				{errors.email && <p className="error">{errors.email.message}</p>}

				<input
					type="tel"
					placeholder="Phone"
					{...register("phone", {
						required: "Phone is required",
						pattern: {
							value: /^[0-9]{10}$/,
							message: "Enter a valid phone number",
						},
					})}
				/>
				{errors.phone && <p className="error">{errors.phone.message}</p>}
			</div>

			<input
				type="text"
				placeholder="Subject"
				{...register("subject", { required: "Subject is required" })}
			/>
			{errors.subject && <p className="error">{errors.subject.message}</p>}

			<textarea
				placeholder="Your message..."
				{...register("message", { required: "Message is required" })}
			/>
			{errors.message && <p className="error">{errors.message.message}</p>}

			<button type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Sending..." : "Send Message →"}
			</button>

			{message && <p className="feedback-message">{message}</p>}
		</form>
	);
};

export default ContactForm;
