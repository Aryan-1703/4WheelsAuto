import dotenv from "dotenv";
import nodemailer from "nodemailer";

// Load environment variables
dotenv.config();

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: parseInt(process.env.SMTP_PORT || "465", 10),
	secure: true, 
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

const mailOptions = {
	from: `"Aryan" <${process.env.SMTP_USER}>`, 
	to: "atalpada@algomau.ca", 
	subject: "Test Email", 
	text: "Hello world?", 
	html: "<b>Hello world?</b>", 
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		return console.error("Error sending email:", error);
	}
	console.log("Message sent: %s", info.messageId);
});
