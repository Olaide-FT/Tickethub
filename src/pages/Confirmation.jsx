import { Link, useLocation } from "react-router-dom";
import ConfirmationCard from "../components/ConfirmationCard";

function Confirmation() {
  const location = useLocation();

  const booking =
    location.state || JSON.parse(localStorage.getItem("latestBooking"));

  if (!booking) {
    return (
      <main className="container">
        <div className="empty-state">
          <h2>No Booking Found</h2>
          <p>You have not made a recent booking.</p>

          <Link to="/" className="btn">
            Browse Events
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container center">
      <h1>Booking Successful!</h1>
      <p>Your ticket has been confirmed.</p>

      <ConfirmationCard booking={booking} />

      <div className="button-group">
        <Link to="/my-tickets" className="btn">
          View My Tickets
        </Link>

        <Link to="/" className="btn secondary-btn">
          Back to Events
        </Link>
      </div>
    </main>
  );
}

export default Confirmation;