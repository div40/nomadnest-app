import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return <div>Loading...</div>;
  }
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
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

  if (redirect) {
    return <Navigate to={redirect} />;
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
      {subpage === "profile" && (
        <div className=" text-center text-xl font-medium mt-20 text-slate-900">
          Welcome! You are logged in as{" "}
          <span className="text-primary">{user.name}</span> ({user.email}){" "}
          <br />
          <button
            onClick={logout}
            className="bg-primary/95 transition-all hover:bg-primary hover:-translate-y-1 text-white px-4 py-2 rounded-full items-center justify-center mt-20 w-[160px]"
          >
            LOGOUT
          </button>
        </div>
      )}
      {subpage === "places" && (
        <div>
          <PlacesPage />
        </div>
      )}
    </div>
  );
};

export default AccountPage;
