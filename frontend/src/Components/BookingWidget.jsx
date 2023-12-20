import React, { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [redirect, setRedirect] = useState("");
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function makeBooking() {
    const response = await axios.post("/bookings", {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      mobile,
      place: place._id,
      price: numberOfNights * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <div className="px-4 py-4 mt-4 font-medium text-center bg-gray-200 rounded-2xl">
        <span className="text-xl">Price: ₹{place.price} per Night</span>
        <div>
          <div className="px-2 mt-6 mb-4">
            <label>Check-in:</label>
            <input
              className="px-2 py-1 ml-4 bg-gray-100 border-gray-200 cursor-pointer border-1"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="px-2 mb-4">
            <label>Check-out:</label>
            <input
              className="px-2 py-1 ml-2 bg-gray-100 border-gray-200 cursor-pointer border-1 "
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="px-2 mb-4">
          <label>No of guests:</label>
          <input
            type="text"
            className="bg-gray-100 border border-gray-400"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="flex">
            <div className="px-2 mb-2">
              <label>Full Name:</label>
              <input
                type="text"
                className="bg-gray-100 border-2 border-gray-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="px-2 mb-8">
              <label>Mobile No:</label>
              <input
                type="tel"
                className="bg-gray-100 border-2 border-gray-400"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
        )}
        <button
          onClick={makeBooking}
          className="px-8 py-2 mt-4 text-lg text-white rounded-full bg-primary"
        >
          Book Now
          {numberOfNights > 0 && (
            <span> - ₹ {numberOfNights * place.price}</span>
          )}
        </button>
      </div>
    </>
  );
};

export default BookingWidget;
