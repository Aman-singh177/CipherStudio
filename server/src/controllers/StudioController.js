import Studio from "../models/StudioModel.js";
 
export const saveStudio = async (req, res) => {
  try {
    const { id, title, files } = req.body;

    let studio;
    if(id) { 
      studio = await Studio.findByIdAndUpdate(
        id,
        { title, files, updatedAt: Date.now() },
        { new: true }
      );
    } else { 
      studio = await Studio.create({ title, files });
    }

    res.json({ success: true, studio });
  } catch (error) {
    console.error("Error saving studio:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
 
export const getStudio = async (req, res) => {
  try {
    const studio = await Studio.findById(req.params.id);
    if (!studio) {
      return res.status(404).json({ success: false, message: "Studio not found" });
    }
    res.json({ success: true, studio });
  } catch (error) {
    console.error("Error fetching studio:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
