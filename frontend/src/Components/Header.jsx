import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <header className="flex items-center justify-around w-full gap-3 pb-4 border-b border-gray-300 shadow-sm md:items-center md:gap-0 md:justify-between shadow-gray-300">
        <Link
          to={"/"}
          className="flex items-center gap-1 pl-2 md:pl-8 logo text-primary"
        >
          <img
            src="/bookmark.svg"
            alt="logo"
            className="md:w-[30px] md:h-[30px] w-[40px] h-[40px] object-cover"
          />
          <span className="hidden text-2xl font-bold md:block text-primary">
            NomadNest
          </span>
        </Link>
        <div className="flex items-center justify-center gap-1 py-1 pl-2 pr-3 font-sans border border-gray-300 rounded-full shadow-md cursor-pointer md:py-2 md:pl-6 md:gap-3">
          <div>
            <h1 className="text-sm font-semibold md:text-base">Anywhere</h1>
          </div>
          <div className="h-6 border-l border-gray-300"> </div>
          <div>
            <h1 className="text-sm font-semibold md:text-base">Any week</h1>
          </div>
          <div className="h-6 border-l border-gray-300"> </div>
          <div>
            <h1 className="text-sm font-light text-gray-500 md:text-base">
              Add guests
            </h1>
          </div>
          <button className="p-1 rounded-full md:p-2 bg-primary aspect-square">
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
          className="flex items-center justify-center gap-2 p-1 pr-2 mr-6 border border-gray-300 rounded-full cursor-pointer md:pr-4 md:gap-3 md:p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 font-extrabold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="overflow-hidden text-white bg-gray-400 border rounded-full aspect-square border-gray400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative w-6 h-6 font-bold top-1"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {!!user && (
            <div className="hidden text-lg font-semibold md:block text-primary">
              {user.name}
            </div>
          )}
        </Link>
      </header>
    </div>
  );
};

export default Header;
