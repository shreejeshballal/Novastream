import { useContext, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdExplore, MdSubscriptions, MdFavorite } from "react-icons/md";
import { BsMusicNoteList } from "react-icons/bs";

import { IconContext } from "react-icons";

import { Avatar } from "../assets";
import { AuthModalContext } from "../context/AuthModalContext";

import Tooltip from "../components/Tooltip";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { openAuthModal } = useContext(AuthModalContext);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const icons = [
    {
      name: "Home",
      icon: (
        <GoHomeFill className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
      to: "/",
    },
    {
      name: "Explore",
      icon: (
        <MdExplore className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
      to: "/explore",
    },
    {
      name: "Music",
      icon: (
        <BsMusicNoteList className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
      to: "/music",
    },
    {
      name: "Favorites",
      icon: (
        <MdFavorite className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
      to: "/favorites",
    },
    {
      name: "Subscriptions",
      icon: (
        <MdSubscriptions className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
      to: "/subscriptions",
    },
  ];

  const handleClick = (index, url, event) => {
    setActive(index);
    navigate(url);
  };

  return (
    <div className="flex sm:bg-transparent fixed w-full h-[5rem] bottom-0 bg-background justify-evenly sm:h-[100vh]  sm:w-[5.5rem] sm:flex-col gap-10 sm:justify-around px-auto items-center z-10">
      <IconContext.Provider
        value={{
          className: "global-class-name ",
          color: "#EFEFEF",
          size: "1.5rem",
        }}
      >
        <div className="flex left-0 self-center items-center w-full justify-evenly sm:w-full sm:h-[20rem] sm:flex-col sm:justify-around">
          {icons.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index, item.to)}
              className={`flex justify-center items-center w-[3em] h-[3em] ${
                index === active ? "sideBarActive" : ""
              } cursor-pointer transition-all ease-in-out duration-500 rounded-full group`}
            >
              {item.icon}
              <Tooltip text={item.name} />
            </div>
          ))}
          <div className="w-11 sm:w-12 sm:absolute sm:bottom-0 my-auto sm:mb-3 transition-all  hover:border-2 bg-white rounded-full border border-white group">
            <Tooltip text="Profile" />
            <img
              src={Avatar}
              alt="Avatar"
              onClick={openAuthModal}
              className="w-12 cursor-pointer"
            />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
