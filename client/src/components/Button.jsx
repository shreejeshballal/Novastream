import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-black py-2 px-4 rounded-lg text-white transition-all hover:bg-gray-500 dark:bg-white dark:text-black dark:hover:bg-gray-300"
    >
      {label}
    </button>
  );
};

export default Button;
