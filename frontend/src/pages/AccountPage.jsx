import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

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
    let classes = "py-2 px-4";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <nav className="w-full flex font-medium mt-10 gap-7 justify-center items-center">
        <Link className={activeClasses("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link to={"/account/bookings"} className={activeClasses("bookings")}>
          My Bookings
        </Link>
        <Link to={"/account/places"} className={activeClasses("places")}>
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
            className="bg-primary text-white px-4 py-2 rounded-full items-center justify-center mt-20 w-[160px]"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
