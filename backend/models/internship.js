import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    stipend: {
      type: String
    },
    duration: {
      type: String
    },
    location: {
      type: String
    },
    deadline: {
      type: Date
    }
  },
  { timestamps: true }
);

const Internship = mongoose.model("Internship", internshipSchema);
export default Internship;
