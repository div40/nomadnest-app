import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountNav from "../Components/AccountNav";
import axios from "axios";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-0">
      <AccountNav />
      <Link to={"/account/places/new"}>
        <div className="bg-primary/95 cursor-pointer transition-all hover:bg-primary hover:-translate-y-1 flex text-white items-center w-[100px] justify-center py-2 px-4 gap-2 rounded-md font-medium">
          <img src="/plus.svg" alt="add" className="h-[22px] w-[22px]" />
          <span className="text-md">ADD</span>
        </div>
      </Link>
      <div className="w-full">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="bg-gray-100 flex gap-4 py-2 px-4 rounded-xl cursor-pointer"
            >
              <div className="flex h-40 w-40 bg-transparent shrink-0">
                {place.photos.length > 0 && (
                  <img
                    className="object-cover rounded-2xl"
                    src={"http://localhost:4000/uploads/" + place.photos[0]}
                    alt="place_photo"
                  />
                )}
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl font-semibold">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
