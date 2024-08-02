import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

export const sendEmail = (name, email, phone, date, service) => {
	const mailOptions = {
		from: `"Appointment" <${process.env.SMTP_USER}>`,
		to: "aryan17032@gmail.com",
		subject: `Appointment Request from ${name}`,
		text: `You have received a new appointment request from ${name}.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nService: ${service}\n\nTo contact them, you can reply directly to this email.`,
		html: `
			<p><strong>New Appointment Request</strong></p>
			<p>You have received a new appointment request from <strong>${name}</strong>.</p>
			<p><strong>Details:</strong></p>
			<p><strong>Date:</strong> ${date}</p>
			<p><strong>Service Requested:</strong> ${service}</p>
			<p><strong>Contact Information:</strong></p>
            <p><strong>Phone:</strong> ${phone}</p>
			<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
		    <p>To contact them, simply click the email address above to send a direct reply.</p>
			<p>Best regards,</p>
			<strong>Appointment Manager - Aryan</strong>
		`,
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				reject(error);
			} else {
				resolve(info);
			}
		});
	});
};
