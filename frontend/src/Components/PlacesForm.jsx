import React, { useState } from "react";
import PhotoUploader from "./PhotoUploader";
import Perks from "./Perks";
import AccountNav from "./AccountNav";

const PlacesForm = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);

  const [perks, setPerks] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  async function addNewPlace(e) {
    e.preventDefault();
    const { data } = await axios.post("/places", {
      title,
      address,
      description,
      extraInfo,
      addedPhotos,
      perks,
      checkIn,
      checkOut,
      maxGuests,
    });
  }
  return (
    <>
      <div className="w-full px-[300px] mt-0">
        <AccountNav />
        <form onSubmit={addNewPlace}>
          <h2 className="mx-2 font-medium text-gray-700 text-lg">Title</h2>
          <input
            type="text"
            placeholder="Name of your accomodation"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h2 className="mx-2 font-medium text-gray-700 text-lg">Address</h2>
          <input
            type="text"
            placeholder="Address to your accomodation"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <h2 className="mx-2 font-medium text-gray-700 text-lg">
            Description
          </h2>
          <textarea
            className="resize-none"
            placeholder="Add a description of your place"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <h2 className="mx-2 font-medium text-gray-700 text-lg">Perks</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ml-2 mt-2">
            <Perks selected={perks} onChange={setPerks} />
          </div>
          <h2 className="mx-2 font-medium text-gray-700 text-lg">Extra Info</h2>
          <textarea
            placeholder="Additional information"
            className="resize-none"
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          ></textarea>
          <h2 className="mx-2 font-medium text-gray-700 text-lg">Timings</h2>
          <div className="grid gap-4 mt-2 sm:grid-cols-3">
            <div className="text-center">
              <h3>Check-In Time</h3>
              <input
                type="text"
                placeholder="14:00"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="text-center">
              <h3>Check-Out Time</h3>
              <input
                type="text"
                placeholder="11:00"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="text-center">
              <h3>Max Guests</h3>
              <input
                type="text"
                placeholder="2"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>
          </div>

          <h2 className="mx-2 font-medium text-gray-700 text-lg">Photos</h2>
          <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

          <div className="flex items-center justify-center mt-20">
            <button className="bg-primary text-white px-8 py-2 rounded-full">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PlacesForm;