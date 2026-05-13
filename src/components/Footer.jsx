import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>TicketHub</h2>
          <p>
            Discover events, book tickets, and keep track of your reservations
            easily.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/my-tickets">My Tickets</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@tickethub.com</p>
          <p>Location: Lagos, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} TicketHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;