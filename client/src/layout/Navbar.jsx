import React, { useContext, useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import { HiOutlineSearch } from "react-icons/hi";
import { BsSunFill, BsMoonFill } from "react-icons/Bs";
import { ThemeContext } from "../context/ThemeContext";
import Button from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [searchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-between h-[4rem] bg-white dark:bg-black dark:text-white fixed z-50 px-4">
      <h1>Logo</h1>
      {searchActive && (
        <Searchbar closeSearchBar={() => setSearchActive(false)} />
      )}
      <div className="flex justify-center items-center gap-3 ">
        <HiOutlineSearch
          className="hover:bg-hover dark:hover:bg-slate-700 h-10 w-10 p-2 transition-all rounded-full  cursor-pointer"
          onClick={() => setSearchActive(true)}
        />
        {theme == "light" ? (
          <BsSunFill
            className="hover:bg-hover h-10 w-10 p-2 transition-all rounded-full cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <BsMoonFill
            className="hover:bg-hover dark:hover:bg-slate-700 h-10 w-10 p-2 transition-all rounded-full cursor-pointer"
            onClick={toggleTheme}
          />
        )}
        <Button
          label="Login"
          onClick={() => {
            navigate("/auth");
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
