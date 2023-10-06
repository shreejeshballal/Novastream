import { MdUpload } from "react-icons/md";
import Searchbar from "./components/Searchbar.jsx";
import TagTray from "./components/TagTray.jsx";
import { useNavigate } from "react-router-dom";
import { AuthModalContext } from "../../context/AuthModalContext.jsx";
import { useContext } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const { openAuthModal } = useContext(AuthModalContext); // Context to open and close modal
  const navigateToUpload = () => {
    if (localStorage.getItem("user")) {
      openAuthModal();
    } else {
      navigate("/upload");
    }
  };
  return (
    <nav className="w-full  bg-background h-[5rem] md:gap-10 flex items-center px-6 justify-between fixed z-20  sm:px-10 md:px-7 gap-5">
      <img
        src="/logo.svg"
        alt="logo"
        onClick={() => navigate("/")}
        className="h-10 aspect-square cursor-pointer"
      />
      <TagTray />
      <Searchbar />
      <div
        className="bg-dark-gray p-2 rounded-full hover:bg-light-gray transition-all cursor-pointer"
        onClick={() => navigateToUpload()}
      >
        <MdUpload className="text-light text-[1.6rem] " />
      </div>
    </nav>
  );
};
export default Navbar;
