import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true
    },
    industry: {
      type: String
    },
    location: {
      type: String
    },
    website: {
      type: String
    },
    hrEmail: {
      type: String
    }
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
export default Company;
