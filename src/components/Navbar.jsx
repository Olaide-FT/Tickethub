import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ ticketCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        TicketHub
      </Link>

      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <nav className={isOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/my-tickets" onClick={closeMenu}>
          My Tickets ({ticketCount})
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;