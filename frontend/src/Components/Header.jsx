import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <header className="flex items-center justify-between ">
        <Link
          to={"/"}
          href=""
          className="logo flex items-center gap-1 text-primary"
        >
          <img src="/bookmark.svg" alt="logo" className="w-[30px] h-[30px]" />
          <span className="text-2xl font-bold text-primary">NomadNest</span>
        </Link>
        <div className="flex gap-3 border border-gray-300 rounded-full py-2 pl-6 pr-3 shadow-md items-center justify-center cursor-pointer font-sans">
          <div>
            <h1 className="font-semibold">Anywhere</h1>
          </div>
          <div className="border-l border-gray-300 h-6"> </div>
          <div>
            <h1 className="font-semibold">Any week</h1>
          </div>
          <div className="border-l border-gray-300 h-6"> </div>
          <div>
            <h1 className="font-light text-gray-500">Add guests</h1>
          </div>
          <button className="bg-primary rounded-full aspect-square p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <Link
          to={user ? "/account" : "/login"}
          className="flex gap-3 border border-gray-300 rounded-full p-2 items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="bg-gray-400 rounded-full aspect-square text-white border border-gray400 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 relative top-1"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {!!user && <div>{user.name}</div>}
        </Link>
      </header>
    </div>
  );
};

export default Header;
