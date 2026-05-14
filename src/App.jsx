import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import EventDetail from "./pages/EventDetail";
import Confirmation from "./pages/Confirmation";
import MyTickets from "./pages/MyTickets";
import NotFound from "./pages/NotFound";

const BOOKINGS_KEY = "eventTicketBookings";

function App() {
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem(BOOKINGS_KEY);
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  useEffect(() => {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (newBooking) => {
  setBookings((prevBookings) => {
    const existingBooking = prevBookings.find(
      (booking) =>
        booking.eventId === newBooking.eventId &&
        booking.ticketType === newBooking.ticketType &&
        booking.email === newBooking.email
    );

    if (existingBooking) {
      return prevBookings.map((booking) =>
        booking.bookingReference === existingBooking.bookingReference
          ? {
              ...booking,
              quantity: booking.quantity + newBooking.quantity,
              totalPrice: booking.totalPrice + newBooking.totalPrice,
            }
          : booking
      );
    }

    return [newBooking, ...prevBookings];
  });
};

  const deleteBooking = (bookingReference) => {
    setBookings((prevBookings) =>
      prevBookings.filter(
        (booking) => booking.bookingReference !== bookingReference
      )
    );
  };

  return (
    <>
      <Navbar ticketCount={bookings.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/events/:id"
          element={<EventDetail addBooking={addBooking} />}
        />

        <Route path="/confirmation" element={<Confirmation />} />

        <Route
          path="/my-tickets"
          element={
            <MyTickets bookings={bookings} deleteBooking={deleteBooking} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;