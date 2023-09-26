import React from "react";
import Searchbar from "../components/Searchbar";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between h-16 bg-white dark:bg-black fixed z-50 px-20">
      <h1>Cincsyne</h1>
      <Searchbar />
      <h1>Signout</h1>
    </div>
  );
};

export default Navbar;
