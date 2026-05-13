import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <article className="event-card">
      <img src={event.image} alt={event.name} />

      <div className="event-body">
        <b className="badge">{event.category}</b>

        <h2>{event.name}</h2>

        <p>
          <b>Date:</b> {event.date} | {event.time}
        </p>

        <p>
          <b>Venue:</b> {event.location}
        </p>

        <h3>Price ₦{event.regularPrice.toLocaleString()}</h3>

        <Link to={`/events/${event.id}`} className="btn">
          Get Tickets
        </Link>
      </div>
    </article>
  );
}

export default EventCard;