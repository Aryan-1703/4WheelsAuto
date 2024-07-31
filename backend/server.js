import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./emailUtils.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));

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

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.SMTP_PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
