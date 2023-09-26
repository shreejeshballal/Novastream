import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <div className="w-full flex items-center justify-between h-16 bg-white dark:bg-black fixed z-50 px-20">
      <h1>Cincsyne</h1>
      {searchActive && (
        <Searchbar closeSearchBar={() => setSearchActive(false)} />
      )}
      <div className="flex justify-center items-center gap-5 ">
        <HiOutlineSearch
          className="hover:bg-hover h-10 w-10 p-2 transition-all rounded-full text-slate-700 cursor-pointer"
          onClick={() => setSearchActive(true)}
        />
        <h1>Signout</h1>
      </div>
    </div>
  );
};

export default Navbar;
