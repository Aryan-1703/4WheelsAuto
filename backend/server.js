import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./emailUtils.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Handle POST request to /api/send-email
app.post("/api/send-email", async (req, res) => {
	const { name, email, phone, date, service } = req.body;

	try {
		await sendEmail(name, email, phone, date, service);
		res.send("Email sent successfully");
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).send("Error sending email");
	}
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
