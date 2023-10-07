import React from "react";
import Popular from "./components/Popular";
import Recommend from "./components/Recommend";

const Home = () => {
	return (
		<div className="text-blend-light bg-background w-full h-full ">
			<h1 className="sm:text-7xl text-4xl px-10 my-5 font-light">
				Welcome <span className="text-ascent font-bold">herbiemaster</span>
			</h1>
			<h3 className="px-10 mb-5 text-xl sm:text-3xl">Enjoy your day with unlimited stream!</h3>
			<Recommend />
			<Popular />
		</div>
	);
};

export default Home;
