import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
const Searchbar = ({ closeSearchBar }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="absolute w-full  left-0 flex justify-center items-center gap-5 bg-white ">
      <div className=" rounded-full hover:bg-light p-3 ">
        <BiArrowBack className="text-[1.3rem]" onClick={closeSearchBar} />
      </div>
      <div className="flex min-w-0 ">
        <input
          type="text"
          name="search"
          className="bg-white rounded-l-3xl transition-all  w-full sm:w-[30rem]   p-3  border-[0.5px] focus:ring-1 ring-inset focus:bg-slate-100 "
          placeholder="Search"
          onChange={handleChange}
          value={searchInput}
        />
        <button
          type="button"
          className="bg-light flex items-center justify-center  w-[100px] hover:bg-hover transition-all delay-0 ease-linear rounded-r-3xl  duration-100 text-[1.3rem] "
        >
          <HiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
