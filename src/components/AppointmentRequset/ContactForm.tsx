import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import "../../styles/AppointmentRequest/ContactForm.css";

// Define the form data type
interface FormData {
	name: string;
	email: string;
	phone: string;
	service: string; // Changed from 'subject' to 'service'
	message: string;
	attachments?: FileList;
}

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>();

	const [message, setMessage] = useState<string>("");
	const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

	// Handle file input change
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			setSelectedFiles(files);
		}
	};

	// Handle form submission
	const onSubmit: SubmitHandler<FormData> = async data => {
		const formData = new FormData();

		// Append form data
		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("phone", data.phone);
		formData.append("service", data.service);
		formData.append("message", data.message);

		// Append files if any
		if (selectedFiles) {
			Array.from(selectedFiles).forEach(file => {
				formData.append("attachments", file);
			});
		}

		try {
			const response = await axios.post(
				"https://4wheelsautocollision.com/backend/api/send-email",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			setMessage(response.data);
			setTimeout(() => {
				reset();
				setSelectedFiles(null); // Reset file input
			}, 3500);
		} catch (error) {
			console.error("Error:", error);
			setMessage("An error occurred. Please try again later.");
		}
	};

	return (
		<form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
			<h2>Schedule Your Appointment</h2>
			<div className="input-group">
				<input
					type="text"
					placeholder="Name"
					{...register("name", { required: "Name is required" })}
				/>
				{errors.name && <p className="error">{errors.name.message}</p>}

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

				<input
					type="email"
					placeholder="Email"
					{...register("email", {
						required: "E-mail is required",
						pattern: {
							value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
							message: "Enter a valid e-mail address",
						},
					})}
				/>
				{errors.email && <p className="error">{errors.email.message}</p>}
			</div>
			<textarea
				placeholder="Case Description..."
				{...register("message", { required: "Message is required" })}
			/>
			{errors.message && <p className="error">{errors.message.message}</p>}
			<label>Attach photo/video</label>
			<input type="file" multiple onChange={handleFileChange} />
			<div className="recaptcha">{/* Include your reCAPTCHA component here */}</div>
			<button type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Sending..." : "Send →"}
			</button>

			{message && <p className="feedback-message">{message}</p>}
		</form>
	);
};

export default ContactForm;
