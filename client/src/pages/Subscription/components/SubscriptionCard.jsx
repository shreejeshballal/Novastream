import React from "react";
import Button from "./Button";

const SubscriptionCard = ({ item, key }) => {
  return (
    <div
      className="flex sm:flex-col sm:w-[15rem] flex-2 sm:text-center gap-2 h-full w-full items-center sm:px-4 py-2 sm:py-4"
      key={key}
    >
      <div className="h-[65px] aspect-square w-fit sm:h-[100px]  rounded-full overflow-hidden  ">
        <img
          src={item.avatar}
          className="h-[65px] sm:h-[100px]  aspect-square "
          alt="avatar"
        />
      </div>
      <div className="flex-[2] w-[8rem]  sm:w-full">
        <h2 className="opacity-90  sm:px-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {item.name}
        </h2>
        <p className="text-[0.8rem] opacity-50 whitespace-nowrap overflow-hidden text-ellipsis ">
          {item.subscribers} subscribers
        </p>
      </div>
      <Button />
    </div>
  );
};

export default SubscriptionCard;
