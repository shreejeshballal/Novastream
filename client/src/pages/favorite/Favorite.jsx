import Locked from "../../components/Locked";
import Nofavorite from "./components/NoFavorite";
import React, { useState } from "react";
const Favorite = () => {
  const [favorite, setFavorite] = useState([]);
  const user = window.localStorage.getItem("user");
  return user ? (
    favorite.length > 0 ? (
      <div className="flex w-full gap-x-10 flex-row  flex-wrap ">
        {Videos.map((videos) => (
          <Card key={videos.id} video={videos.video} />
        ))}
      </div>
    ) : (
      <Nofavorite />
    )
  ) : (
    <Locked />
  );
};

export default Favorite;
