function ConfirmationCard({ booking }) {
  const qrData = encodeURIComponent(
    `Ticket Reference: ${booking.bookingReference}
Event: ${booking.eventName}
Name: ${booking.attendeeName}
Ticket: ${booking.ticketType} x ${booking.quantity}
Total: ₦${booking.totalPrice}`
  );

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrData}`;

  return (
    <div className="confirmation-card">
      <h2>{booking.eventName}</h2>

      <div className="qr-box">
        <img src={qrCodeUrl} alt="Ticket QR Code" />
        <p>Scan ticket QR code</p>
      </div>

      <p>
        <b>Booking Reference:</b> {booking.bookingReference}
      </p>

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
        <b>Name:</b> {booking.attendeeName}
      </p>

      <p>
        <b>Email:</b> {booking.email}
      </p>

      <h3>Total Paid: ₦{booking.totalPrice.toLocaleString()}</h3>
    </div>
  );
}

export default ConfirmationCard;