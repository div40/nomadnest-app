import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../Components/BookingWidget";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((res) => {
      setPlace(res.data);
    });
  }, [id]);
  if (!place) return ""; //since at start the value is null in the state

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 min-h-screen overflow-x-hidden bg-gray-200">
        <div className="p-8">
          <div className="flex items-end justify-end mt-8">
            <button className="fixed" onClick={() => setShowAllPhotos(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div className="flex items-center justify-center">
                <img
                  className="w-3/4 mb-8 shadow-lg h-4/5 shadow-gray-600"
                  src={"http://localhost:4000/uploads/" + photo}
                  alt="placephoto"
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 border-t-2 border-t-slate-200">
      <div className="pr-40 ml-20 text-center md:text-left md:ml-40">
        <h1 className="mt-8 text-3xl font-semibold text-slate-900">
          {place.title}
        </h1>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <a
            className="ml-1 font-semibold underline "
            href={"https://maps.google.com/?q=" + place.address}
            target="_blank"
          >
            {place.address}
          </a>
        </div>
        <div className="relative">
          <div className="my-6 grid gap-3 grid-cols-[2fr_1fr]">
            <div>
              {place.photos?.[0] && (
                <div className="overflow-hidden rounded-l-xl">
                  <img
                    onClick={() => setShowAllPhotos(true)}
                    className="object-cover cursor-pointer aspect-square"
                    src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                    alt="place_photo"
                  />
                </div>
              )}
            </div>
            <div className="grid">
              {place.photos?.[1] && (
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="object-cover cursor-pointer aspect-square rounded-tr-xl"
                  src={"http://localhost:4000/uploads/" + place.photos?.[1]}
                  alt="place_photo"
                />
              )}
              <div className="overflow-hidden rounded-br-xl">
                {place.photos?.[2] && (
                  <img
                    onClick={() => setShowAllPhotos(true)}
                    className="relative cursor-pointer obect-cover aspect-square top-3"
                    src={"http://localhost:4000/uploads/" + place.photos?.[2]}
                    alt="place_photo"
                  />
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setShowAllPhotos(true);
            }}
            className="absolute flex gap-2 px-4 py-2 font-semibold bg-gray-100 border-2 shadow-md text-slate-950 bottom-4 right-4 border-slate-700 rounded-xl"
          >
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
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            See all photos
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          <div className="flex flex-col text-lg">
            <div className="my-4 text-xl">
              <h2 className="mb-2 text-3xl font-semibold">Description</h2>
              {place.description}
            </div>
            <span className="font-medium">Check-in: {place.checkIn}:00</span>
            <span className="font-medium">Check-out: {place.checkOut}:00</span>
            <span className="font-medium">Max Guests: {place.maxGuests}</span>
            <div className="mt-6 text-gray-900 leading-2">
              <h3 className="mb-2 text-3xl font-semibold">Extra Info</h3>
              {place.extraInfo}
            </div>
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
