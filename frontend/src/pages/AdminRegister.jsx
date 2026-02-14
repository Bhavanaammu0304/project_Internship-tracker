import { useState } from "react";
import axios from "axios";

function AdminRegister() {
  const [form, setForm] = useState({
    userName: "",
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
      await axios.post("http://localhost:5000/admin/register", form);
      alert("Admin Registered Successfully ✅");
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
          <i className="bi bi-shield-lock-fill me-2"></i>Admin Register
        </h4>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" name="userName" placeholder="Username" onChange={handleChange} required />
          <input className="form-control mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          <button className="btn btn-dark w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default AdminRegister;
