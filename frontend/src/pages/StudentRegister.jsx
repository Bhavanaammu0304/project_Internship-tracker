import { useState } from "react";
import axios from "axios";

function StudentRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/student/register", form);
      alert("Student Registered Successfully ✅");
      
      // reload
      window.location.reload();
    } catch (error) {
      alert(error.response?.data?.error);
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card p-4 shadow">
        <h4 className="text-center mb-3">
          <i className="bi bi-person-plus-fill me-2"></i>Student Register
        </h4>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input className="form-control mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          <button className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;
