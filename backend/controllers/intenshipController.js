import Internship from "../models/internship.js";


// 🔹 Create Internship
export const createInternship = async (req, res) => {
  try {
    const { companyId, title, description, stipend, duration, location, deadline } = req.body;

    const internship = new Internship({
      companyId,
      title,
      description,
      stipend,
      duration,
      location,
      deadline
    });

    const savedInternship = await internship.save();
    res.status(201).json(savedInternship);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Get All Internships (with company details)
export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find().populate("companyId");
    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Get Internship By ID
export const getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id)
      .populate("companyId");

    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }

    res.status(200).json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Update Internship
export const updateInternship = async (req, res) => {
  try {
    const updatedInternship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedInternship) {
      return res.status(404).json({ message: "Internship not found" });
    }

    res.status(200).json(updatedInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Delete Internship
export const deleteInternship = async (req, res) => {
  try {
    const deletedInternship = await Internship.findByIdAndDelete(req.params.id);

    if (!deletedInternship) {
      return res.status(404).json({ message: "Internship not found" });
    }

    res.status(200).json({ message: "Internship deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
