import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { events } from "../data/events";
import EventCard from "../components/EventCard";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredEvents = events.slice(0, 4);

  const categories = ["All", ...new Set(events.map((event) => event.category))];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(searchText.toLowerCase()) ||
      event.location.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory = category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === featuredEvents.length - 1 ? 0 : prevSlide + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [featuredEvents.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === featuredEvents.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? featuredEvents.length - 1 : prevSlide - 1
    );
  };

  const activeEvent = featuredEvents[currentSlide];

  return (
    <main>
      <section
        className="tm-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 35, 0.7), rgba(10, 10, 35, 0.7)), url(${activeEvent.image})`,
        }}
      >
        <div className="tm-hero-content">
          <span className="tm-label">Featured Event</span>

          <h1>{activeEvent.name}</h1>

          <p className="tm-hero-text">{activeEvent.description}</p>

          <div className="tm-event-meta">
            <span>{activeEvent.date}</span>
            <span>{activeEvent.time}</span>
            <span>{activeEvent.location}</span>
          </div>

          <div className="tm-hero-actions">
            <Link to={`/events/${activeEvent.id}`} className="btn">
              Find Tickets
            </Link>

            <p>
              Price ₦
              {(activeEvent.regularPrice || activeEvent.price).toLocaleString()}
            </p>
          </div>
        </div>


        <div className="tm-dots">
          {featuredEvents.map((event, index) => (
            <button
              key={event.id}
              className={currentSlide === index ? "tm-dot active" : "tm-dot"}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>

      <section className="tm-search-section">
        <div className="tm-search-card">
          <h2>Search events near you</h2>

          <div className="tm-search-row">
            <input
              type="text"
              placeholder="Search by event name or location..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section-heading">
          <div>
            <span className="tm-label dark">Popular Events</span>
            <h2>Discover what’s happening</h2>
          </div>

          <p>{filteredEvents.length} event(s) found</p>
        </div>

        <div className="category-pills">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "pill active-pill" : "pill"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredEvents.length === 0 ? (
          <div className="empty-state">
            <h2>No event found</h2>
            <p>Try searching another event name, venue, or category.</p>
          </div>
        ) : (
          <section className="event-grid">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </section>
        )}
      </section>
    </main>
  );
}

export default Home;