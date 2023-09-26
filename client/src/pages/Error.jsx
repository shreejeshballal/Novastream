import React from "react";
import bot from "../assets/confusedBot.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="p-[1rem] pt-[5rem] flex flex-col-reverse md:flex-row w-full justify-end lg:justify-center items-center h-screen  dark:bg-black lg:gap-10 ">
      <div className="lg:h-[70%] lg:w-[40rem] md:pl-5">
        <h1 className="text-[3.5rem] lg:text-[5rem] text-primary font-bold lg:mb-[-1rem]">
          Whoops!
        </h1>
        <h2 className="text-[2rem] lg:text-[4rem] dark:text-white font-bold leading-[1.3]	">
          {" "}
          This page got lost in conversation
        </h2>
        <p className="text-lg mt-2 dark:text-white font-montserrat">
          This page actually does not exist. It is normal to get lost, Not to
          worry we got you covered. You can head over to our{" "}
          <Link
            className="text-blue-700 font-semibold dark:text-blue-300  "
            to="/"
          >
            homepage
          </Link>{" "}
          and continue with happy browsing.
        </p>
      </div>
      <img
        src={bot}
        alt="Confused Bot Image"
        className="h-[13rem] md:h-[22rem] lg:h-[30rem] aspect-square"
      />
    </div>
  );
};

export default Error;
