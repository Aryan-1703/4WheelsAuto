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

const sendEmail = data => {
	const { name, email, phone, date, service, message, attachments } = data;

	const mailOptions = {
		from: `"Appointment Request" <${process.env.SMTP_USER}>`,
		to: "fourwheelsauto@hotmail.com",
		subject: `Request from ${name}`,
		text: `You have received a new request from ${name}.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${
			date || "N/A"
		}\nService: ${
			service || "N/A"
		}\nMessage: ${message}\n\nTo contact them, you can reply directly to this email.`,
		html: `
            <p><strong>New Request</strong></p>
            <p>You have received a new request from <strong>${name}</strong>.</p>
            <p><strong>Details:</strong></p>
            <p><strong>Date:</strong> ${date || "N/A"}</p>
            <p><strong>Service Requested:</strong> ${service || "N/A"}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Contact Information:</strong></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p>To contact them, simply click the email address above to send a direct reply.</p>
            <p>Best regards,</p>
            <strong>Request Manager</strong>
        `,
		attachments: attachments
			? attachments.map(file => ({
					filename: file.originalname,
					content: file.buffer,
		}))
			: [],
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

export { sendEmail };
