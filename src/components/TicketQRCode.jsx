function TicketQRCode({ booking, size = 140 }) {
  const qrData = encodeURIComponent(
    `Ticket Reference: ${booking.bookingReference}
Event: ${booking.eventName}
Name: ${booking.attendeeName}
Ticket: ${booking.ticketType} x ${booking.quantity}
Total: ₦${booking.totalPrice}`
  );

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${qrData}`;

  return (
    <div className="ticket-qr">
      <img src={qrCodeUrl} alt="Ticket QR Code" />
      <p>Scan QR Ticket</p>
    </div>
  );
}

export default TicketQRCode;