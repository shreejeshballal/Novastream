import { MdUpload } from "react-icons/md";
import SearchBar from "../components/SearchBar";
import TagTray from "../components/TagTray";
const Navbar = () => {
  return (
    <nav className="w-full bg-background h-[5rem] md:gap-10 flex items-center px-2 justify-between  sm:px-10 md:px-10">
      <img src="/logo.svg" alt="logo" className="h-10 aspect-square" />
      <TagTray />
      <SearchBar />
      <div className="bg-dark-gray p-2 rounded-full hover:bg-light-gray transition-all cursor-pointer ">
        <MdUpload className="text-light text-[1.6rem] " />
      </div>
    </nav>
  );
};

export default Navbar;
