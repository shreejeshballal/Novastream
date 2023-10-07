import React from "react";
import { Videos } from "../../../assets";
import CustomCarousel from "./CustomCarousel";

function Popular() {
	return (
		<div>
			<h1 className="font-bold text-2xl px-10">Popular</h1>
			<CustomCarousel items={Videos} />
		</div>
	);
}

export default Popular;
