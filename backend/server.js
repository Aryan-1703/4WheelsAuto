const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(express.json());

// Routes
// Define your routes here or in separate route files
app.use("/api", require("./routes/api"));

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected"))
	.catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
