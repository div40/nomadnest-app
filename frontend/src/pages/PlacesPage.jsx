import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountNav from "../Components/AccountNav";
import axios from "axios";
import PlaceImages from "../Components/PlaceImages";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-0">
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
              className="flex gap-4 px-4 py-2 bg-gray-100 cursor-pointer rounded-xl"
            >
              <div className="flex w-40 h-40 bg-transparent shrink-0">
                <PlaceImages place={place} />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl font-semibold">{place.title}</h2>
                <p className="mt-2 text-sm">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
