import Paypal from "../../components/Payments/Paypal";
import "./Seatbooking.css";
import { row1, row2, row3, row4, row5 } from "./seat";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000", { transports: ["websocket"] });

export const Seatbooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const pri = 1200;

  useEffect(() => {
    socket.on("seat-booked", (seat) => {
      setSelectedSeats((currentSeats) => [...currentSeats, seat]);
    });

    socket.on("seat-unbooked", (seat) => {
      setSelectedSeats((currentSeats) =>
        currentSeats.filter((s) => s !== seat)
      );
    });

    return () => {
      socket.off("seat-booked");
      socket.off("seat-unbooked");
    };
  }, []);

  const handleSeatClick = (seat, pri) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      setTotalPrice(totalPrice - pri);
      socket.emit("seat-unbooked", seat); // Emit 'seat-unbooked' event with seat as data
    } else {
      // Check if the seat has already been booked by another client
      socket.emit("check-seat", seat, (isBooked) => {
        if (!isBooked) {
          setSelectedSeats([...selectedSeats, seat]);
          setTotalPrice(totalPrice + pri);
          socket.emit("seat-booked", seat); // Emit 'seat-booked' event with seat as data
        } else {
          alert("This seat has already been booked by another client.");
        }
      });
    }
  };

  return (
    <div className="content">
      <div className="movie-details">
        <div className="movie">
          <img src="../src/assets/Batman.jpg" alt="" />
          <section className="test">
            <h2>Batman</h2>
            <h6>By unknown</h6>
            <br />
            <p className="catergories">
              <span>Action</span>
              <span>Adventure</span>
              <span>Sci-Fi</span>
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              asperiores repellendus, eius unde non vero corrupti dolore ut!
              Porro, itaque?
            </p>
          </section>
        </div>
      </div>
      <div className="seat-booking">
        <div className="container">
          <div className="seat-layout">
            <form action="" className="option">
              <input type="date" id="date" name="date" className="date-option"></input>
              <select name="cars" id="cars" className="time-option">
                <option value="10:30AM">10:30AM</option>
                <option value="01:00PM">01:00PM</option>
                <option value="04:30PM">04:30PM</option>
                <option value="07:00PM">07:00PM</option>
              </select>
            </form>
            <div className="screen">Screen this way</div>
            <div className="row">
              {row1.map((seat) => {
                return (
                  <div
                    key={seat.id}
                    className={`seat ${
                      selectedSeats.includes(seat) ? "seatbooked" : ""
                    }`}
                    onClick={() => handleSeatClick(seat, pri)}
                  >
                    {seat.seatNumber}{" "}
                  </div>
                );
              })}
            </div>
            <div className="row">
              {row2.map((seat) => {
                return (
                  <div
                    key={seat.id}
                    className={`seat ${
                      selectedSeats.includes(seat) ? "seatbooked" : ""
                    }`}
                    onClick={() => handleSeatClick(seat, pri)}
                  >
                    {seat.seatNumber}
                  </div>
                );
              })}
            </div>
            <div className="row">
              {row3.map((seat) => {
                return (
                  <div
                    key={seat.id}
                    className={`seat ${
                      selectedSeats.includes(seat) ? "seatbooked" : ""
                    }`}
                    onClick={() => handleSeatClick(seat, pri)}
                  >
                    {seat.seatNumber}
                  </div>
                );
              })}
            </div>
            <div className="row">
              {row4.map((seat) => {
                return (
                  <div
                    key={seat.id}
                    className={`seat ${
                      selectedSeats.includes(seat) ? "seatbooked" : ""
                    }`}
                    onClick={() => handleSeatClick(seat, pri)}
                  >
                    {seat.seatNumber}
                  </div>
                );
              })}
            </div>
            <div className="row">
              {row5.map((seat) => {
                return (
                  <div
                    key={seat.id}
                    className={`seat ${
                      selectedSeats.includes(seat) ? "seatbooked" : ""
                    }`}
                    onClick={() => handleSeatClick(seat, pri)}
                  >
                    {seat.seatNumber}
                  </div>
                );
              })}
            </div>
            <div className="guide">
              <section>
                <div className="seat-available"></div>
                <p>Available</p>
              </section>
              <section>
                <div className="seat-sold"></div>
                <p>Sold</p>
              </section>
              <section>
                <div className="seat-selected"></div>
                <p>Selected</p>
              </section>
            </div>
          </div>
        </div>

        <div className="payment">
          <div>
            <h4>Selected Seats</h4>
            <span className="bookedSeats">
              {selectedSeats.map((seat, index) => (
                <p key={index}>{seat.seatNumber},</p>
              ))}
            </span>
            <br />
            <input
              type="text"
              name="total"
              value={"Total Price = " + totalPrice}
              id="total-titcket-priceDisplay"
              disabled
            />
          </div>
          <form method="post" action="authorize_payment" className="formStyle">
            <input type="hidden" name="product" value="<%= movieName %>" />
            <input type="hidden" name="subtotal" value="0" />
            <input type="hidden" name="shipping" value="0" />
            <input type="hidden" name="total" value="" id="totaltitcketprice" />
            <input type="hidden" name="tax" value="0" />
            <input
              type="text"
              name="items"
              value=""
              id="seatInfo"
              className="display-none"
            />
            <input
              type="text"
              name="amount"
              id="totaltitcketprice"
              value=""
              className="display-none"
            />
            <input
              type="text"
              name="first_name"
              value="<%= date %>"
              className="display-none"
            />
            <input
              type="text"
              name="last_name"
              value="<%= time %>"
              className="display-none"
            />
            <input
              type="text"
              name="email"
              value="<%=rs.getString(4)%>"
              className="display-none"
            />
            <input
              type="text"
              name="phone"
              value="<%=rs.getString(6)%>"
              className="display-none"
            />
            {/* <input type="submit" value="Checkout" className="payhere-payment" /> */}
            <dir className="paypal">
            <Paypal />
            </dir>
          </form>
        </div>
      </div>
    </div>
  );
};
