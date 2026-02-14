import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashbord = () => {
  const [student, setStudent] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [editData, setEditData] = useState({
    userName: "",
    email: "",
  });

  // ✅ FETCH ALL CUSTOMERS (Safe Version)
  const fetchStudent = async () => {
    try {
      const res = await axios.get("http://localhost:5000/admin/students");

      console.log("Backend Data:", res.data);

      // Handle different backend response formats
      if (Array.isArray(res.data)) {
        setStudents(res.data);
      } else if (Array.isArray(res.data.students)) {
        setStudents(res.data.students);
      } else if (Array.isArray(res.data.data)) {
        setStudents(res.data.data);
      } else {
        setStudents([]);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStudents([]);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ✅ VIEW CUSTOMER BY ID
  const viewStudent = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/admin/students/${id}`
      );

      setSelectedId(id);
      setEditData({
        userName: res.data.userName || "",
        email: res.data.email || "",
      });
    } catch (error) {
      alert("Student Not Found");
    }
  };

  // ✅ UPDATE CUSTOMER
  const updateStudent = async () => {
    try {
      await axios.put(
        `http://localhost:5000/admin/students/${selectedId}`,
        editData
      );
      alert("Student Updated Successfully ✅");
      setSelectedId(null);
      fetchStudents();
    } catch (error) {
      alert("Update Failed ❌");
    }
  };

  // ✅ DELETE CUSTOMER
  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        await axios.delete(
          `http://localhost:5000/admin/customers/${id}`
        );
        fetchstudents();
      } catch (error) {
        alert("Delete Failed ❌");
      }
    }
  };

  return (
    <div className="container-fluid p-4">

      {/* Header */}
      <h3 className="mb-4">
        <i className="bi bi-speedometer2 me-2"></i>
        Admin Dashboard - Student Management
      </h3>

      {/* Customers Table */}
      <div className="card shadow border-0 mb-4">
        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th style={{ width: "150px" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {Array.isArray(students) && students.length > 0 ? (
                customers.map((c, index) => (
                  <tr key={c._id}>
                    <td>{index + 1}</td>
                    <td>{c.userName}</td>
                    <td>{c.email}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => viewstudent(c._id)}
                      >
                        <i className="bi bi-eye"></i>
                      </button>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteStudent(c._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Students Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* UPDATE FORM */}
      {selectedId && (
        <div className="card shadow border-0">
          <div className="card-body">
            <h5 className="mb-3">
              <i className="bi bi-pencil-square me-2"></i>
              Update Student
            </h5>

            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Username"
                  value={editData.userName}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      userName: e.target.value,
                    })
                  }
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      email: e.target.value,
                    })
                  }
                />

                <button
                  className="btn btn-success me-2"
                  onClick={updateStudent}
                >
                  <i className="bi bi-check-circle me-1"></i>
                  Update
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashbord;
