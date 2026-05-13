import { Link } from "react-router-dom";

function Navbar({ ticketCount }) {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        TicketHub
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/my-tickets">My Tickets ({ticketCount})</Link>
      </nav>
    </header>
  );
}

export default Navbar;