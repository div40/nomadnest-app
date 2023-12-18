import React, { useEffect, useState } from "react";
import axios from "axios";

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
          <div>
            <div className="flex">
              {place.photos?.[0] && (
                <img
                  className="rounded-xl aspect-square object-cover"
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt="cover"
                />
              )}
            </div>
            <h2 className="font-bold text-lg  mt-2">{place.address}</h2>
            <h3 className="text-lg md:text-base font-normal text-gray-500 mt-1 md:whitespace-nowrap">
              {place.title}
            </h3>
            <div className="mt-2">
              <span className="font-semibold text-gray-900 text-lg md:text-base">
                ₹{place.price} Night
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
