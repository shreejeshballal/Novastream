import React from "react";
import img from "../../assets/moviePoster.jpg";

const Home = () => {
  return (
    <div className=" h-[100vh] text-light">
      <img src={img} className="h-[85vh] object-cover w-[100vw] "></img>
    </div>
  );
};

export default Home;
