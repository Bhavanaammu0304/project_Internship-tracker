export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold">Internship</h1>
          <p className="lead mt-3">
            Revolutionizing Urban Internships with Smart Technology
          </p>
          <p className="mt-3">
            1. Keeps all internship applications organized in one centralized system.
            2. Saves time by reducing manual tracking using spreadsheets or papers.
            3. Allows easy updating and monitoring of application status.
            4. Improves transparency between students and administrators.
            5. Helps students stay focused and meet deadlines efficiently.

          </p>
          <div className="mt-4">
            <button className="btn btn-warning btn-lg me-3">
              Apply  for internship
            </button>
            <button className="btn btn-outline-light btn-lg">
              📊 Explore Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Core Features</h2>
          <p className="text-muted">
            Designed to make internships and job oppurtunities smarter, faster, and stress-free.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h4>📡 Real-Time projects Detection</h4>
              <p>
                Smart sensors track available spaces instantly and reduce congestion.
              </p>
              <ul>
                <li>Live availability updates</li>
                <li>Automated alerts</li>
                <li>Reduced wait time</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h4>💳 Seamless Digital Payments</h4>
              <p>
                Integrated payment system with secure transactions.
              </p>
              <ul>
                <li>UPI & Card payments</li>
                <li>Instant billing</li>
                <li>Transparent pricing</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h4>📊 Advanced Analytics</h4>
              <p>
                Gain insights into usage patterns and revenue performance.
              </p>
              <ul>
                <li>Revenue tracking</li>
                <li>Peak hour analysis</li>
                <li>Occupancy reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SMARTPARK */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Why SmartPark?</h2>
              <p className="mt-3">
                Urban congestion is rising rapidly. SmartPark helps cities
                optimize space utilization and provides a seamless experience
                for drivers.
              </p>
              <p>
                Our intelligent system reduces search time for parking by up to
                60%, saving fuel and reducing emissions.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="p-4 bg-dark text-white rounded shadow">
                <h3>🚗 150+ Parking Slots</h3>
                <h3>👥 1000+ Daily Users</h3>
                <h3>💰 ₹5L+ Monthly Revenue</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
