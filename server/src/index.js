import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import StudioRoute from "./routes/StudioRoute.js";
import connectDB from "./config/db.js";
 
dotenv.config();
console.log("Starting server...");

const app = express();
const PORT = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());
 
connectDB();
 
app.use("/api/studio", StudioRoute);
 
app.get("/", (req, res) => {
  res.send("Welcome to CipherStudio Backend 🚀");
});
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
