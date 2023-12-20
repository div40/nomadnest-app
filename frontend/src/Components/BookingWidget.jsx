import React from "react";

const BookingWidget = ({ place }) => {
  return (
    <>
      <div className="px-8 py-4 mt-4 font-medium text-center bg-gray-200 rounded-2xl">
        <span className="text-xl">Price: ₹{place.price} per Night</span>
        <div>
          <div className="px-2 mt-6 mb-4">
            <label>Check-in:</label>
            <input className="bg-transparent cursor-pointer" type="date" />
          </div>
          <div className="px-2 mb-4">
            <label>Check-out:</label>
            <input className="bg-transparent cursor-pointer" type="date" />
          </div>
        </div>
        <div className="px-2 mb-8">
          <label>No of guests</label>
          <input type="number" className="bg-gray-300" />
        </div>
        <button className="px-8 py-2 text-white rounded-full bg-primary">
          Book Now
        </button>
      </div>
    </>
  );
};

export default BookingWidget;
