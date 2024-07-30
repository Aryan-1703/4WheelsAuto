// // server.js (Node.js with Express)
// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// app.post("/api/send-email", async (req, res) => {
// 	const { name, email, phone, date, service } = req.body;

// 	const transporter = nodemailer.createTransport({
// 		service: "gmail",
// 		auth: {
// 			user: "your-email@gmail.com",
// 			pass: "your-email-password",
// 		},
// 	});

// 	const mailOptions = {
// 		from: "4WheelsAutoCollision.com",
// 		to: "4WheelsAutoCollision@domain.com",
// 		subject: "New Appointment Request",
// 		text: Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nService Needed: ${service},
// 	};

// 	try {
// 		await transporter.sendMail(mailOptions);
// 		res.status(200).send("Email sent successfully!");
// 	} catch (error) {
// 		console.error("Error sending email:", error);
// 		res.status(500).send("Error sending email.");
// 	}
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(Server running on port ${PORT}));