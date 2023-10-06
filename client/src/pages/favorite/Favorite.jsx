import Nofavorite from "./components/NoFavorite";
import React, { useState } from "react";
const Favorite = () => {
  const [favorite, setFavorite] = useState([]);
  return favorite.length > 0 ? <div></div> : <Nofavorite />;
};

export default Favorite;
