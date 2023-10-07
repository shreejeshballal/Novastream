import React, { useContext } from "react";
import SecondaryButton from "./SecondaryButton";
import { AuthModalContext } from "../context/AuthModalContext";

const Locked = () => {
  const { openAuthModal } = useContext(AuthModalContext);
  return (
    <div className="h-full  mt-[-8rem] sm:mt-[-5rem] w-full sm:ml-[-5.5rem] z-[0] flex justify-center items-center absolute text-white ">
      <div>Locked</div>
      <SecondaryButton label={"Login"} onClick={openAuthModal} />
    </div>
  );
};

export default Locked;
