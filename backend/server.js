import express from "express";
0;
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

// Serve static files from the public_html directory
const publicPath = path.join(__dirname, "..", "public_html");
app.use(express.static(publicPath));

// Serve the main index.html file for any non-API route
app.get("*", (req, res) => {
	res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3001, () => {
	console.log("Server is running on port 3001");
});
