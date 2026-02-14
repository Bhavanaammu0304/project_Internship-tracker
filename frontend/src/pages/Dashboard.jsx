export default function Dashboard() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4"> Dashboard</h2>

      <div className="row g-4 text-center">
        <div className="col-md-3">
          <div className="card bg-primary text-white p-3 shadow">
            <h5>Total Slots</h5>
            <h2>150</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-success text-white p-3 shadow">
            <h5>Available</h5>
            <h2>60</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-danger text-white p-3 shadow">
            <h5>Occupied</h5>
            <h2>90</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-warning text-dark p-3 shadow">
            <h5>Revenue</h5>
            <h2>₹15,600</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
