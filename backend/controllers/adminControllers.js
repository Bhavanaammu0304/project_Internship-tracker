import Admin from "../models/admin.js";
import Student from "../models/student.js";
// create admin  with email and userName and password 
// if admin already exists return error
// if admin created return success

export const createAdmin = async (req, res) => {
    try {
        const { email, userName, password, confirmPassword } = req.body;

        if (!email || !userName || !password || !confirmPassword) {
            throw new Error("All fields are required");
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            throw new Error("Admin already exists");
        }

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const admin = await Admin.create(req.body);
        res.status(201).json({ admin });


    } catch (error) {
        res.status(400).json({ error: error.message });
    }


}

// login admin with email and password
// if admin not found return error
// if admin found return success

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("All fields are required");
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            throw new Error("Admin not found");
        }

        if (admin.password !== password) {
            throw new Error("Incorrect password");
        }

        res.status(200).json({ admin });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



// get all the customer 

export const getAllStudent = async (req, res) => {
    try {
        const students= await Student.find({});
        res.status(200).json({ students });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get customer by id 
// if customer not found return error
// if customer found return success
export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Student.findById(id);
        if (!customer) {
            throw new Error("Student not found");
        }
        res.status(200).json({ student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//update

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Customer.findByIdAndUpdate(id, req.body, { new: true });
        if (!student) {
            throw new Error("student not found");
        }
        res.status(200).json({ student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// delete

export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            throw new Error("student not found");
        }
        res.status(200).json({ student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}