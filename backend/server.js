import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/api/send-email", async (req, res) => {
	const { name, email, phone, date, service } = req.body;

	const transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: Number(process.env.MAIL_PORT),
		secure: process.env.MAIL_SECURE === "true",
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
	});

	const mailOptions = {
		from: process.env.MAIL_USER,
		to: "aryan17032@gmail.com",
		subject: "New Appointment Request",
		text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nService Needed: ${service}`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).send("Email sent successfully!");
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).send("Error sending email.");
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
