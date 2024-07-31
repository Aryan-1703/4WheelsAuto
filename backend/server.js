import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./emailUtils.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "https://4wheelsautocollision.com", 
	})
);

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, "dist")));

// API endpoint for sending emails
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

// Fallback route to serve the React app
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Set the port from environment variables or default to 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
