import "./Admin_Bookings.css";
import React from "react";
import BookingTable from "../components/Admin-Bookings/Admin_Booking_Table";

const BookingPage = () => {
  return (
    <div className="Admin_Booking_Page">
      <BookingTable />
    </div>
  );
};

export default BookingPage;
