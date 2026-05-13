import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";
import TicketForm from "../components/TicketForm";

function EventDetail({ addBooking }) {
  const { id } = useParams();

  const event = events.find((event) => event.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <main className="container">
        <div className="empty-state">
          <h2>Event Not Found</h2>
          <p>The event you are looking for does not exist.</p>

          <Link to="/" className="btn">
            Back to Events
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="event-detail">
        <div className="event-info">
          <img src={event.image} alt={event.name} className="detail-image" />

          <span className="badge">{event.category}</span>

          <h1>{event.name}</h1>

          <p>
            <strong>Date:</strong> {event.date}
          </p>

          <p>
            <strong>Time:</strong> {event.time}
          </p>

          <p>
            <strong>Location:</strong> {event.location}
          </p>

          <p className="description">{event.description}</p>

          <p className="price">
            Regular: ₦{event.regularPrice.toLocaleString()} | VIP: ₦
            {event.vipPrice.toLocaleString()}
          </p>
        </div>

        <TicketForm event={event} addBooking={addBooking} />
      </section>
    </main>
  );
}

export default EventDetail;