import React from "react";
import { Videos } from "../assets";
import Card from "../components/Card";

function Explore() {
	return (
		<div className="flex gap-10 flex-row flex-wrap justify-center">
			{Videos.map((videos) => (
					<Card key={videos.id} video={videos.video} />
			))}
		</div>
	);
}

export default Explore;
