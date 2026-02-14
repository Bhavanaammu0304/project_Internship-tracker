export default function Contact() {
  return (
    <div className="container my-5">
      <div className="row shadow rounded overflow-hidden">

        {/* Contact Info */}
        <div className="col-md-5 bg-dark text-white p-5">
          <h3>Get in Touch</h3>
          <p className="mt-4">
            We'd love to hear from you! Whether you have questions about
             features, or partnerships, our team is ready to help.
          </p>

          <p className="mt-4">📍 Chennai, Tamil Nadu, India</p>
          <p>📧 support@internshiptracker.com</p>
          <p>📞 +91 98765 43210</p>
          <p>🕒 Mon - Sat: 9:00 AM - 6:00 PM</p>
        </div>

        {/* Contact Form */}
        <div className="col-md-7 p-5 bg-light">
          <h3 className="mb-4">Send Us a Message</h3>

          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
            />

            <textarea
              rows="4"
              className="form-control mb-3"
              placeholder="Your Message"
            ></textarea>

            <button className="btn btn-dark w-100">
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
