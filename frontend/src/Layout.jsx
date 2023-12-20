import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen px-2 py-2 md:px-4 md:py-4">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
