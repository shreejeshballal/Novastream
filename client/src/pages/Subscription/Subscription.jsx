import React, { useState } from "react";
import { Avatar } from "../../assets/index.js";
import SubscriptionCard from "./components/SubscriptionCard.jsx";
const Subscription = () => {
  const [subscriptions, scaleSubscriptions] = useState([
    {
      id: 1,
      avatar: Avatar,
      name: "herbiemaster",
      subscribers: "200 M",
    },
    {
      id: 2,
      avatar: Avatar,

      name: "herbiemaster",
      subscribers: "200 M",
    },
    {
      id: 3,
      avatar: Avatar,

      name: "herbiemaster",
      subscribers: "200 M",
    },
    {
      id: 3,
      avatar: Avatar,

      name: "herbiemaster the sword man hello idk what is going on ",
      subscribers: "200 M",
    },
    {
      id: 3,
      avatar: Avatar,

      name: "Web dev simplified",
      subscribers: "200 M",
    },
    {
      id: 3,
      avatar: Avatar,

      name: "herbiemaster",
      subscribers: "200 M",
    },
  ]);
  return (
    <div className=" text-light px-7 py-5 flex flex-col gap-4 pb-[5rem] sm:pb-[0rem]   ">
      <h1 className="text-3xl ">My Subscriptions</h1>
      <main className="flex gap-5 flex-wrap">
        {subscriptions.map((item, key) => {
          return <SubscriptionCard key={key} item={item} />;
        })}
      </main>
    </div>
  );
};

export default Subscription;
