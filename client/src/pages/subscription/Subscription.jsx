import React, { useState } from "react";
import { Avatar } from "../../assets/index.js";
import SubscriptionCard from "./components/SubscriptionCard.jsx";
import NoSubscription from "./components/NoSubscription.jsx";
import Locked from "../../components/Locked.jsx";
const Subscription = () => {
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
    const newSubscriptions = subscriptions.filter((item) => {
      return item.id !== id;
    });
    setSubscriptions(newSubscriptions);
  };

  const user = window.localStorage.getItem("user");
  return !user ? (
    subscriptions.length > 0 ? (
      <div className=" text-light px-5 py-5 flex flex-col gap-4 pb-[5rem] sm:pb-[0rem]   ">
        <h1 className="text-3xl ">My Subscriptions</h1>
        <main className="flex gap-5 flex-wrap">
          {subscriptions.map((item) => {
            return (
              <SubscriptionCard
                key={item.id}
                item={item}
                unsubscribe={() => {
                  handleRemoveSubscription(item.id);
                }}
              />
            );
          })}
        </main>
      </div>
    ) : (
      <NoSubscription />
    )
  ) : (
    <Locked />
  );
};

export default Subscription;
