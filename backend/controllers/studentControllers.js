import Student from "../models/student.js";

// create customer with name, email and password
// if customer already exists return error
// if customer created return success
export const createStudent = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            throw new Error("All fields are required");
        }

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            throw new Error("Student already exists");
        }

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const student = await Student.create(req.body);
        res.status(201).json({ student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// login customer with email and password
// if customer not found return error
// if customer found return success

export const loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("All fields are required");
        }

        const student = await Student.findOne({ email });
        if (!student) {
            throw new Error("student not found");
        }

        if (student.password !== password) {
            throw new Error("Incorrect password");
        }

        res.status(200).json({ student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
