import React from "react";
import { Link, useLocation } from "react-router-dom";

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }
  function activeClasses(type = null) {
    let classes = "py-2 px-4 rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white ";
    } else {
      classes += " bg-gray-300";
    }
    return classes;
  }
  return (
    <div>
      <nav className="w-full flex font-medium mt-10 gap-7 justify-center items-center flex-row">
        <Link
          className={`flex items-center gap-1 ${activeClasses("profile")}`}
          to={"/account"}
        >
          <img src="/user.svg" alt="user" className={`h-[18px] w-[18px]`} />
          My Profile
        </Link>
        <Link
          to={"/account/bookings"}
          className={`flex items-center gap-1 ${activeClasses("bookings")}`}
        >
          <img src="/note.svg" alt="note" className="h-[20px] w-[20px]" />
          My Bookings
        </Link>
        <Link
          to={"/account/places"}
          className={`flex items-center gap-1 ${activeClasses("places")}`}
        >
          <img src="/hotel.svg" alt="rooms" className="w-[20px] h-[20px]" />
          My Accomodations
        </Link>
      </nav>
    </div>
  );
};

export default AccountNav;
