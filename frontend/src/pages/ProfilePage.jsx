import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../Components/AccountNav";

const ProfilePage = () => {
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

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav />
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

export default ProfilePage;
