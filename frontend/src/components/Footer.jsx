export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Internship Tracker </h5>
            <p>
              An Internship Tracker is a web application that helps students manage and monitor their internship 
              applications in one organized system. It allows users to track company details, application status, 
              deadlines, and progress efficiently.

            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Dashboard</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📧 support@smartpark.com</p>
            <p>📞 +91 98765 43210</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 Internship Tracker:everyone apply for it
          </p>
        </div>
      </div>
    </footer>
  );
}
