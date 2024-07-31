import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Setup Nodemailer transport (replace with your SMTP credentials)
const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: Number(process.env.MAIL_PORT),
	secure: process.env.MAIL_SECURE === "true",
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});

// Handle POST request to send an email
app.post("/api/send-email", (req, res) => {
	const { name, email, phone, date, service } = req.body;

	const mailOptions = {
		from: `"4Wheels Auto Collision" <your-email@gmail.com>`,
		to: "aryan17032@gmail.com", // Replace with your receiving email
		subject: "New Appointment Request",
		html: `
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Phone:</strong> ${phone}</p>
			<p><strong>Date:</strong> ${date}</p>
			<p><strong>Service Needed:</strong> ${service}</p>
		`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error sending email:", error);
			return res.status(500).send("Error sending email");
		}
		console.log("Email sent:", info.response);
		res.send("Your appointment request has been sent successfully!");
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
