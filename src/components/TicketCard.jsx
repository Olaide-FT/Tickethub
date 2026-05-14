import TicketQRCode from "./TicketQRCode";

function TicketCard({ booking, deleteBooking }) {
  return (
    <article className="ticket-card ticket-card-row">
      <div className="ticket-details">
        <span className="badge">{booking.category}</span>

        <h2>{booking.eventName}</h2>

        <p>
          <strong>Date:</strong> {booking.date} | {booking.time}
        </p>

        <p>
          <strong>Venue:</strong> {booking.location}
        </p>

        <p>
          <strong>Ticket:</strong> {booking.ticketType} x {booking.quantity}
        </p>

        <p>
          <strong>Reference:</strong> {booking.bookingReference}
        </p>

        <h3>₦{booking.totalPrice.toLocaleString()}</h3>

        <button
          type="button"
          className="btn danger-btn"
          onClick={() => deleteBooking(booking.bookingReference)}
        >
          Cancel Booking
        </button>
      </div>

      <TicketQRCode booking={booking} size={140} />
    </article>
  );
}

export default TicketCard;