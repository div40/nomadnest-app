import React from "react";

const Perks = ({ selected, onChange }) => {
  return (
    <>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" />
        <span>WiFi</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" />
        <span>Free Parking</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" />
        <span>Pets Allowed</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" />
        <span>Kitchen</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" />
        <span>Washing Machine</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" />
        <span>Breakfast</span>
      </label>
    </>
  );
};

export default Perks;
