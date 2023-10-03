import React from "react";
import { Videos } from "../assets";
import Card from "../components/Card";

function Explore() {
  return (
    <div className="flex  gap-x-10 flex-row justify-center flex-wrap ">
      {Videos.map((videos) => (
        <Card key={videos.id} video={videos.video} />
      ))}
    </div>
  );
}

export default Explore;
