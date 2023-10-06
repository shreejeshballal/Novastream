import React from "react";

const SecondaryButton = ({ label, onClick }) => {
  return (
    <div
      className="   bg-dark-gray text-blend-light text-center m-w-[7rem] px-5 py-2 rounded-md text-[1rem] hover:bg-light-gray transition-all"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default SecondaryButton;
