import React, { useContext } from "react";
import { AuthModalContext } from "../../../context/AuthModalContext";

const Overlay = () => {
  const { closeAuthModal } = useContext(AuthModalContext);
  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-background opacity-50 z-0 cursor-pointer"
      onClick={closeAuthModal}
    />
  );
};

export default Overlay;
