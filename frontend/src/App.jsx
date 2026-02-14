import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages (you will create these)
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import CustomerLogin from "./pages/StudentLogin";
import AdminRegister from "./pages/AdminRegister";
import StudentRegister from "./pages/StudentRegister";
import Navbar from "./components/Navebar";
import Footer from "./components/Footer";
import AdminDashbord from "./pages/AdminDashbord";
import StudentDashboard from "./pages/StudentDashboard";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ marginTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AdminDashbord" element={<AdminDashbord />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/student-login" element={<CustomerLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/student-register" element={<StudentRegister />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
