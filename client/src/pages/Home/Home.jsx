import React from "react";
import { Videos } from "../../assets";

import Carousel from "../../components/Carousel";

const Home = () => {
	return (
		<div className="w-full h-[calc(100vh-5rem)] overflow-hidden">
			<Carousel Videos={Videos} />
		</div>
	);
};

export default Home;
