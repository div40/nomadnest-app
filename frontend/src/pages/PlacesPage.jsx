import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Components/Perks";
import axios from "axios";

const PlacesPage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [perks, setPerks] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState("");

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  return (
    <div className="flex items-center justify-center mt-10">
      {action !== "new" && (
        <Link to={"/account/places/new"}>
          <div className="bg-primary/95 cursor-pointer transition-all hover:bg-primary hover:-translate-y-1 flex text-white items-center w-[100px] justify-center py-2 px-4 gap-2 rounded-md font-medium">
            <img src="/plus.svg" alt="add" className="h-[22px] w-[22px]" />
            <span className="text-md">ADD</span>
          </div>
        </Link>
      )}
      {action === "new" && (
        <div className="w-full px-[300px] mt-8">
          <form>
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
            <h2 className="mx-2 font-medium text-gray-700 text-lg">
              Extra Info
            </h2>
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
            <div className="flex items-center gap-5">
              <input
                type="text"
                placeholder="Add using a link..."
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
              />
              <button
                onClick={addPhotoByLink}
                className="bg-gray-400 w-[150px] h-[50px] py-2 px-2 text-white rounded-full"
              >
                Add Photo
              </button>
            </div>
            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {addedPhotos.length > 0 &&
                addedPhotos.map((link) => (
                  <div>
                    <img
                      className="rounded 2xl"
                      src={"http://127.0.0.1:4000/uploads/" + link}
                      alt="image"
                    />
                  </div>
                ))}
              <button className="w-[300px] bg-gray-200 border-2 border-gray-400 h-[300px] flex items-center rounded-md justify-center text-5xl text-gray-500">
                +
              </button>
            </div>
            <div className="flex items-center justify-center mt-20">
              <button className="bg-primary text-white px-8 py-2 rounded-full">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
