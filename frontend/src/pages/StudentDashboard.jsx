import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [slots, setSlots] = useState([]);
  const [newBooking, setNewBooking] = useState({
    vehicleNumber: "",
    slotId: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("slotAsc");

  // Load student from localStorage
  useEffect(() => {
    const storedStudent = JSON.parse(localStorage.getItem("student"));
    if (storedStudent) {
      setStudent(storedStudent);
      fetchBookings(storedStudent._id);
    }
  }, []);

  // Load available parking slots
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const res = await axios.get("http://localhost:5000/slots");
        setSlots(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSlots();
  }, []);

  // Apply filters whenever bookings, search, status, or sort change
  useEffect(() => {
    applyFilters();
  }, [bookings, searchTerm, statusFilter, sortOption]);

  // Fetch bookings for the logged-in student
  const fetchBookings = async (studentId) => {
    try {
      const res = await axios.get("http://localhost:5000/booking/bookings");
      const studentBookings = Array.isArray(res.data)
        ? res.data.filter((b) => b.student === studentId || b.student?._id === studentId)
        : [];
      setBookings(studentBookings);
    } catch (error) {
      console.error(error);
      setBookings([]);
    }
  };

  // Add new booking
  const handleAddBooking = async () => {
    if (!student) {
      alert("Student not logged in!");
      return;
    }

    if (!newBooking.vehicleNumber || !newBooking.slotId) {
      alert("Please fill all fields including Slot!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/booking/bookings", {
        vehicleNumber: newBooking.vehicleNumber,
        student: student._id, 
        slot: newBooking.slotId,
      });

      setBookings((prev) => [...prev, res.data]);
      setNewBooking({ vehicleNumber: "", slotId: "" });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error creating booking");
    }
  };

  // Cancel booking
  const cancelBooking = async (id) => {
    try {
      await axios.put(`http://localhost:5000/booking/bookings/${id}/cancel`);
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: "Cancelled" } : b))
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Delete booking
  const deleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/booking/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Apply search, filter, sort
  const applyFilters = () => {
    let temp = [...bookings];

    if (searchTerm) {
      temp = temp.filter(
        (b) =>
          b.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (b.slot?.slotNumber &&
            b.slot.slotNumber.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (statusFilter !== "All") {
      temp = temp.filter((b) => b.status === statusFilter);
    }

    if (sortOption === "slotAsc") {
      temp.sort((a, b) =>
        (a.slot?.slotNumber || "").localeCompare(b.slot?.slotNumber || "")
      );
    } else if (sortOption === "slotDesc") {
      temp.sort((a, b) =>
        (b.slot?.slotNumber || "").localeCompare(a.slot?.slotNumber || "")
      );
    }

    setFilteredBookings(temp);
  };

  return (
    <div className="container mt-4">

      {/* Student Info */}
      {student && (
        <div className="card shadow p-4 mb-4 bg-light">
          <h3>Welcome, {student.userName}</h3>
          <p>Email: {student.email}</p>
        </div>
      )}

      {/* Add Booking Form */}
      <div className="card shadow p-4 mb-4">
        <h4 className="mb-3">Add New Booking</h4>
        <div className="row g-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Vehicle Number"
              value={newBooking.vehicleNumber}
              onChange={(e) =>
                setNewBooking({ ...newBooking, vehicleNumber: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={newBooking.slotId}
              onChange={(e) =>
                setNewBooking({ ...newBooking, slotId: e.target.value })
              }
            >
              <option value="">Select Slot</option>
              {slots.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.slotNumber}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={handleAddBooking}
          disabled={!student}
        >
          Add Booking
        </button>
      </div>

      {/* Bookings Table */}
      <div className="card shadow p-4">
        <h4 className="mb-3">My Bookings</h4>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Vehicle No</th>
              <th>Slot</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((b) => (
                <tr key={b._id}>
                  <td>{b.vehicleNumber}</td>
                  <td>{b.slot?.slotNumber || "N/A"}</td>
                  <td>{b.status}</td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => deleteBooking(b._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;
