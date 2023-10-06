import React from "react";

const Button = ({ unsubscribe }) => {
  const handleClick = () => {
    unsubscribe();
  };
  return (
    <div
      className=" flex-1 bg-dark-gray text-blend-light text-center w-fit px-3 py-2 rounded-md text-[0.8rem] sm:hover:bg-light-gray transition-all"
      onClick={handleClick}
    >
      Unsubscribe
    </div>
  );
};

export default Button;
