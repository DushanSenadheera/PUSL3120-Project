import React, { useState } from "react";
import Booking_Data from "../../helpers/Admin_Booking_Data";


const BookingTable = () => {
  const [bookedTickets, setBookedTickets] = useState(Booking_Data);

  const [formData, setFormData] = useState({
    user: "",
    movie: "",
    date: "",
    time: "",
    category: "Economy",
    seats: "",
    status: "Payment Successful",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBooking = () => {
    const newTicket = { ...formData };
    setBookedTickets((prevTickets) => [...prevTickets, newTicket]);
    setFormData({
      user: "",
      movie: "",
      date: "",
      time: "",
      category: "Economy",
      seats: "",
      status: "Payment Successful",
    });
  };

  const handleRemove = (index) => {
    const updatedTickets = [...bookedTickets];
    updatedTickets.splice(index, 1);
    setBookedTickets(updatedTickets);
  };

  return (
    <div className="booking-container">
      <div className="booking-table-container">
        <div className="booking-table">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Movie</th>
                <th>Date</th>
                <th>Time</th>
                <th>Category</th>
                <th>Seats</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookedTickets.map((ticket, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "even-row" : "odd-row"
                  } ${ticket.status.toLowerCase()}`}
                >
                  <td>{ticket.user}</td>
                  <td>{ticket.movie}</td>
                  <td>{ticket.date}</td>
                  <td>{ticket.time}</td>
                  <td>{ticket.category}</td>
                  <td>{ticket.seats}</td>
                  <td>{ticket.status}</td>
                  <td>
                    <button onClick={() => handleRemove(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="booking-form">
        <form>
          <label>User:</label>
          <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleChange}
          />

          <label>Movie:</label>
          <input
            type="text"
            name="movie"
            value={formData.movie}
            onChange={handleChange}
          />

          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />

          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>

          <label>Seats:</label>
          <input
            type="text"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
          />

          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Payment Successful">Payment Successful</option>
            <option value="Pending">Pending</option>
            <option value="Cancel">Cancel</option>
          </select>

          <button type="button" onClick={handleBooking}>
            Book a Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingTable;
