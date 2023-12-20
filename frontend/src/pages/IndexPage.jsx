import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div className="grid gap-x-10 w-[500px] md:w-full lg:w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 py-4 px-2 gap-y-16">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id}>
            <div className="flex">
              {place.photos?.[0] && (
                <img
                  className="object-cover rounded-xl aspect-square"
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt="cover"
                />
              )}
            </div>
            <h2 className="mt-2 text-lg font-bold">{place.address}</h2>
            <h3 className="mt-1 text-lg font-normal text-gray-500 md:text-base md:whitespace-nowrap">
              {place.title}
            </h3>
            <div className="mt-2">
              <span className="text-lg font-semibold text-gray-900 md:text-base">
                ₹{place.price} <span className="font-normal">Night</span>
              </span>
            </div>
          </Link>
        ))}
    </div>
  );
}
