import express from "express";
import { createStudent, loginStudent } from "../controllers/studentControllers.js";


const studentRouter = express.Router();

studentRouter.post("/register",createStudent)
studentRouter.post("/login",loginStudent)

export default studentRouter