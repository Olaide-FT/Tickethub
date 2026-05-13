

function TicketCard({ booking, deleteBooking }) {
  return (
    <article className="ticket-card">
      <span className="badge">{booking.category}</span>

      <h2>{booking.eventName}</h2>

      <p>
        <b>Date:</b> {booking.date} | {booking.time}
      </p>

      <p>
        <b>Venue:</b> {booking.location}
      </p>

      <p>
        <b>Ticket:</b> {booking.ticketType} x {booking.quantity}
      </p>

      <p>
        <b>Reference:</b> {booking.bookingReference}
      </p>

      <h3>₦{booking.totalPrice.toLocaleString()}</h3>

      <button
        type="button"
        className="btn danger-btn"
        onClick={() => deleteBooking(booking.bookingReference)}
      >
        Cancel Booking
      </button>
    </article>
  );
}

export default TicketCard;