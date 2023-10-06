import React, { useState } from "react";
import { Avatar } from "../../assets/index.js";
import SubscriptionCard from "./components/SubscriptionCard.jsx";

export const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 0,
      avatar: Avatar,
      name: "herbiemaster",
      subscribers: "200 M",
    },
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

      name: "herbiemaster the sword man hello idk what is going on ",
      subscribers: "200 M",
    },
    {
      id: 4,
      avatar: Avatar,

      name: "Web dev simplified",
      subscribers: "200 M",
    },
    {
      id: 5,
      avatar: Avatar,
      name: "herbiemaster",
      subscribers: "200 M",
    },
  ]);

  const handleRemoveSubscription = (id) => {
    console.log(id);
    const newSubscriptions = subscriptions.filter((item) => {
      item.id == 1;
    });

    console.log(newSubscriptions);
    setSubscriptions(newSubscriptions);
  };

  return (
    <div className=" text-light px-5 py-5 flex flex-col gap-4 pb-[5rem] sm:pb-[0rem]   ">
      <h1 className="text-3xl ">My Subscriptions</h1>
      <main className="flex gap-5 flex-wrap">
        {subscriptions.map((item, id) => {
          return (
            <SubscriptionCard
              key={id}
              item={item}
              unsubscribe={() => {
                handleRemoveSubscription(id);
                console.log("hello");
              }}
            />
          );
        })}
      </main>
    </div>
  );
};
