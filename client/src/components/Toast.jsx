import React from "react";

const Toast = ({ label }) => {
  return (
    <div className="bg-light p-5 h-fit w-[20rem] rounded-lg  ">
      {label}
    </div>
  );
};

export default Toast;
