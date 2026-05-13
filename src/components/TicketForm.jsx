import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TicketForm({ event, addBooking }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    ticketType: "Regular",
    quantity: 1,
  });

  const [errors, setErrors] = useState({});
  const [totalPrice, setTotalPrice] = useState(event.regularPrice);

  useEffect(() => {
    const ticketPrice =
      formData.ticketType === "VIP" ? event.vipPrice : event.regularPrice;

    setTotalPrice(ticketPrice * Number(formData.quantity));
  }, [formData.ticketType, formData.quantity, event]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits.";
    }

    if (formData.quantity < 1 || formData.quantity > 5) {
      newErrors.quantity = "Quantity must be between 1 and 5.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      return;
    }

    const booking = {
      bookingReference: `TKT-${Date.now()}`,
      eventId: event.id,
      eventName: event.name,
      category: event.category,
      date: event.date,
      time: event.time,
      location: event.location,
      attendeeName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      ticketType: formData.ticketType,
      quantity: formData.quantity,
      totalPrice,
    };

    addBooking(booking);

    navigate("/confirmation", {
      state: booking,
    });
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2>Book Ticket</h2>

      <label>Full Name</label>
      <input
        type="text"
        name="fullName"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <p className="error">{errors.fullName}</p>}

      <label>Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Phone Number</label>
      <input
        type="text"
        name="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <label>Ticket Type</label>
      <select
        name="ticketType"
        value={formData.ticketType}
        onChange={handleChange}
      >
        <option value="Regular">
          Regular - ₦{event.regularPrice.toLocaleString()}
        </option>
        <option value="VIP">VIP - ₦{event.vipPrice.toLocaleString()}</option>
      </select>

      <label>Quantity</label>
      <input
        type="number"
        name="quantity"
        min="1"
        max="5"
        value={formData.quantity}
        onChange={handleChange}
      />
      {errors.quantity && <p className="error">{errors.quantity}</p>}

      <div className="total-box">
        <p>Total Price</p>
        <h3>₦{totalPrice.toLocaleString()}</h3>
      </div>

      <button type="submit" className="btn full-btn">
        Book Now
      </button>
    </form>
  );
}

export default TicketForm;