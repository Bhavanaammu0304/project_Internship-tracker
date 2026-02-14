import Company from "../models/company.js";


// 🔹 Create Company
export const createCompany = async (req, res) => {
  try {
    const { companyName, industry, location, website, hrEmail } = req.body;

    const companyExists = await Company.findOne({ companyName });
    if (companyExists) {
      return res.status(400).json({ message: "Company already exists" });
    }

    const company = new Company({
      companyName,
      industry,
      location,
      website,
      hrEmail
    });

    const savedCompany = await company.save();
    res.status(201).json(savedCompany);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Get All Companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Get Company By ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Update Company
export const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Delete Company
export const deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);

    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
