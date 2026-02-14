import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import adminRoute from "./routes/adminRoute.js";
import studentRoute from "./routes/studentRoutes.js";
import connectDB from "./config/db.js";
import companyRouter from "./routes/companyRoute.js";
import internshipRouter from "./routes/internshipRoute.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/admin", adminRoute);
app.use("/student", studentRoute);
app.use("/company", companyRouter);
app.use("/internship",internshipRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
