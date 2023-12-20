import React, { useEffect, useState } from "react";
import AccountNav from "../Components/AccountNav";
import axios from "axios";
import PlaceImages from "../Components/PlaceImages";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
      <Link to={`/`}>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <div className="flex gap-4 mt-10 overflow-hidden bg-gray-200 rounded-2xl">
              <div className="w-56">
                <PlaceImages place={booking.place} />
              </div>
              <div className="py-2 pr-2 grow">
                <h2 className="text-xl font-bold border-b border-gray-300">
                  {booking.place.title}
                </h2>
                <div className="flex items-center mt-1 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    dataSlot="icon"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <span className="font-medium">
                    {format(new Date(booking.checkIn), "dd-MM-yyyy")}
                  </span>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      dataSlot="icon"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    dataSlot="icon"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <span className="font-medium">
                    {format(new Date(booking.checkOut), "dd-MM-yyyy")}
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-normal text-gray-600">
                    Name:{" "}
                    <span className="font-semibold text-primary">
                      {booking.name}
                    </span>
                  </h3>
                </div>
                <div className="flex gap-2 mt-2">
                  <div>
                    <span className="text-lg font-medium text-gray-700">
                      {differenceInCalendarDays(
                        new Date(booking.checkOut),
                        new Date(booking.checkIn)
                      )}{" "}
                      Nights |
                    </span>
                  </div>
                  <div>
                    <span className="text-lg font-semibold">Price : </span>
                    <span className="text-lg font-semibold text-primary">
                      ₹ {booking.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Link>
    </div>
  );
};

export default BookingsPage;
