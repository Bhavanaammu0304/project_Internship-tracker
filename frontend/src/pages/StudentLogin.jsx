import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentLogin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/student/login", form);

      // Store student data in localStorage
      localStorage.setItem("student", JSON.stringify(res.data.student));

      alert("Student Login Success ✅");
      window.location.href = "/studentDashboard";
    } catch (error) {
      alert(error.response?.data?.error);
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card p-4 shadow">
        <h4 className="text-center mb-3">
          <i className="bi bi-box-arrow-in-right me-2"></i>Student Login
        </h4>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary w-100">Login</button>
        </form>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/studentRegister">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin;
