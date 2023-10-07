import React from "react";
import SecondaryButton from "../../../components/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { voidImg } from "../../../assets";

const NoSubscription = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[-3rem] h-full gap-3">
      <img src={voidImg} className="h-[13rem]" />

      <h1 className="text-[2rem] sm:text-[4rem] w-full text-center text-light font-bold  ">
        No subscriptions!
      </h1>
      <h1 className="text-light-gray sm:text-2xl text-2xl sm:mt-[-1rem] mb-[0.5rem] text-center ">
        Seem's like you have not subscribed anyone
      </h1>
      <SecondaryButton
        label="Explore"
        onClick={() => {
          navigate("/explore");
        }}
      />
    </div>
  );
};

export default NoSubscription;
