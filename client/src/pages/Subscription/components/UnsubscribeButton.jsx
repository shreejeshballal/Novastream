import React from "react";

const Button = ({ unsubscribe }) => {
  const handleClick = () => {
    unsubscribe();
  };
  return (
    <div
      className="   bg-dark-gray text-blend-light text-center m-w-[7rem] px-4 py-[0.7rem] rounded-md text-[0.8rem] hover:bg-light-gray transition-all"
      onClick={handleClick}
    >
      Unsubscribe
    </div>
  );
};

export default Button;
