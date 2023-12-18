import React from "react";
import { Link } from "react-router-dom";
import AccountNav from "../Components/AccountNav";

const PlacesPage = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-0">
      <AccountNav />
      <Link to={"/account/places/new"}>
        <div className="bg-primary/95 cursor-pointer transition-all hover:bg-primary hover:-translate-y-1 flex text-white items-center w-[100px] justify-center py-2 px-4 gap-2 rounded-md font-medium">
          <img src="/plus.svg" alt="add" className="h-[22px] w-[22px]" />
          <span className="text-md">ADD</span>
        </div>
      </Link>
    </div>
  );
};

export default PlacesPage;
