import React from "react";

const Perks = ({ selected, onChange }) => {
  function handleCheckBoxClick(e) {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" name="wifi" onChange={handleCheckBoxClick} />
        <span>WiFi</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input
          type="checkbox"
          name="free parking"
          onChange={handleCheckBoxClick}
        />
        <span>Free Parking</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input
          type="checkbox"
          name="pets allowed"
          onChange={handleCheckBoxClick}
        />
        <span>Pets Allowed</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" name="kitchen" onChange={handleCheckBoxClick} />
        <span>Kitchen</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input type="checkbox" name="laundry" onChange={handleCheckBoxClick} />
        <span>Laundry</span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl cursor-pointer">
        <input
          type="checkbox"
          name="breakfast"
          onChange={handleCheckBoxClick}
        />
        <span>Breakfast</span>
      </label>
    </>
  );
};

export default Perks;
