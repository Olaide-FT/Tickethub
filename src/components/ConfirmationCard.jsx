import TicketQRCode from "./TicketQRCode";

function ConfirmationCard({ booking }) {
  return (
    <article className="confirmation-card">
      <h2>{booking.eventName}</h2>

      <TicketQRCode booking={booking} size={160} />

      <p>
        <strong>Booking Reference:</strong> {booking.bookingReference}
      </p>

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
        <strong>Name:</strong> {booking.attendeeName}
      </p>

      <p>
        <strong>Email:</strong> {booking.email}
      </p>

      <h3>Total Paid: ₦{booking.totalPrice.toLocaleString()}</h3>
    </article>
  );
}

export default ConfirmationCard;