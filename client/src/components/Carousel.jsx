import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Carousel({ Videos }) {
	const [activeIndex, setActiveIndex] = useState(4);
	return (
		<div>
			<div className="relative h-full">
				{Videos.map((video, index) => (
					<div
						key={index}
						className="absolute w-full text-yellow-100"
						style={{
							transform: `translateX(-${(index - activeIndex) * 100}%)`,
						}}
					>
						<img
							src={video.video.thumbnail}
							alt={video.video.title}
							className="w-full object-cover"
						/>
						<h1 className="absolute left-10 top-[50%] font-dmsans sm:text-7xl font-bold">
							{video.video.title}
						</h1>
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;
