import { Link } from "react-router-dom";
import TicketCard from "../components/TicketCard";

function MyTickets({ bookings, deleteBooking }) {
  return (
    <main className="container">
      <h1>My Tickets</h1>

      {bookings.length === 0 ? (
        <div className="empty-state">
          <h2>No tickets booked yet</h2>
          <p>Your booked tickets will appear here after you buy one.</p>

          <Link to="/" className="btn">
            Browse Events
          </Link>
        </div>
      ) : (
        <section className="tickets-grid">
          {bookings.map((booking) => (
            <TicketCard
              key={booking.bookingReference}
              booking={booking}
              deleteBooking={deleteBooking}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default MyTickets;