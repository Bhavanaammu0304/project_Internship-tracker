import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/admin/login", form);
      alert("Admin Login Success ✅");
    } catch (error) {
      alert(error.response?.data?.error);
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="card p-4 shadow">
        <h4 className="text-center mb-3">
          <i className="bi bi-box-arrow-in-right me-2"></i>Admin Login
        </h4>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
         <Link to="/AdminDashbord">  <button className="btn btn-primary w-100">Login</button> </Link>
         
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
