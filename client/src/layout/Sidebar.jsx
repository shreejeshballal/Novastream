import { useContext, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { BsMusicNoteList } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";

import { IconContext } from "react-icons";

import { Avatar } from "../assets";
import AuthModal from "../components/AuthModal";
import { AuthModalContext } from "../context/AuthModalContext";

function Navbar() {
  const { openAuthModal } = useContext(AuthModalContext);
  
  const [active, setActive] = useState(0);
  const icons = [
    {
      icon: (
        <GoHomeFill className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
    },
    {
      icon: (
        <MdExplore className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
    },
    {
      icon: (
        <BsMusicNoteList className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
    },
    {
      icon: (
        <BiSolidLike className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
      ),
    },
  ];

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <>
      <div className="flex bg-transparent absolute w-full h-[5rem] bottom-0 bg-background justify-evenly sm:h-[100vh]  sm:w-[5.5rem] sm:flex-col gap-10 sm:justify-around px-auto items-center">
        <IconContext.Provider
          value={{
            className: "global-class-name ",
            color: "#EFEFEF",
            size: "1.5em",
          }}
        >
          <div className="flex left-0 self-center items-center w-full justify-evenly sm:w-full sm:h-[20rem] sm:flex-col sm:justify-around">
            {icons.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`flex justify-center items-center w-[3.5em] h-[3.5em] ${
                  index === active ? "sideBarActive" : ""
                } cursor-pointer transition-all ease-in-out duration-500 rounded-full`}
              >
                {icons[index].icon}
              </div>
            ))}
            <img
              src={Avatar}
              alt="Avatar"
              onClick={openAuthModal}
              className="w-12 cursor-pointer sm:absolute sm:bottom-0 my-auto sm:mb-3 transition-all  hover:border-2 bg-white rounded-full border border-white"
            />
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navbar;
