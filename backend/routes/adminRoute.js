import express from "express";
import { createAdmin, deleteStudent, getAllStudent, getStudentById, loginAdmin, updateStudent } from './../controllers/adminControllers.js';


const adminRouter = express.Router();

adminRouter.post("/register",createAdmin)
adminRouter.post("/login",loginAdmin)
adminRouter.get("/students",getAllStudent)
adminRouter.get("/students/:id",getStudentById)
adminRouter.put("/students/:id",updateStudent)
adminRouter.delete("/students/:id",deleteStudent)

export default adminRouter
