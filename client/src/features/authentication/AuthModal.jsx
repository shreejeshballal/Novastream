import { useContext, useState } from "react";
import { AuthModalContext } from "../../context/AuthModalContext";
import Overlay from "./components/Overlay";
import Form from "./components/Form";

const AuthModal = () => {
  const { authModal } = useContext(AuthModalContext); // Context to open and close modal

  if (authModal)
    return (
      <div className="w-full h-full fixed top-0 left-0 z-20 font-dmsans flex items-center justify-center backdrop-blur-sm  ">
        <Overlay />

        <Form />
      </div>
    );
};

export default AuthModal;
