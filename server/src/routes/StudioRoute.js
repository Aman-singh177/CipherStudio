import express from "express";
import Studio from "../models/StudioModel.js";

const router = express.Router();
 
router.post("/save", async (req, res) => {
  try {
    const { title, files } = req.body;

    const newStudio = new Studio({ title, files });
    const savedStudio = await newStudio.save();

    res.status(201).json(savedStudio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 
router.get("/:id", async (req, res) => {
  try {
    const studio = await Studio.findById(req.params.id);
    if (!studio) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(studio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 
router.get("/", async (req, res) => {
  try {
    const studios = await Studio.find().sort({ createdAt: -1 });
    res.json(studios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
