import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// initailise express
const app = express();

// connect to database
await connectDB();

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Server is Running");
});
app.post("/clerk", express.json(), clerkWebhooks);

// Port
const PORT = process.env.PORT || 8000;

// start server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
