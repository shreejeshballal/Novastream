import React, { useState, useRef, useEffect } from "react";
import Card from "../../../components/Card";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi"; // Import the icons

const CustomCarousel = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const cardWidth = 24 * 16;
	const cardGap = 16;
	const containerRef = useRef(null);

	const containerWidth = items.length * (cardWidth + cardGap + 150);

	useEffect(() => {
		containerRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + cardGap)
			}px)`;
	}, [currentIndex, cardWidth, cardGap]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 < items.length ? prevIndex + 1 : 0
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 >= 0 ? prevIndex - 1 : items.length - 1
		);
	};

	const arrowButtonStyle = {
		backgroundColor: "rgba(35, 31, 32, 0.5)",
		padding: "8px",
		borderRadius: "50%",
		color: "white",
		cursor: "pointer",
	};

	return (
		<div className="relative overflow-hidden">
			<div
				className="ml-4 flex overflow-hidden"
				style={{
					whiteSpace: "nowrap",
					width: `${containerWidth}px`, // Set the container width to fit all cards with gaps
					transition: "transform 0.3s ease-in-out",
				}}
				ref={containerRef}
			>
				{items.map((item, index) => (
					<div
						key={index}
						style={{
							width: `${cardWidth}px`,
							marginRight: `${index < items.length - 1 ? cardGap : 0}px`, // Add margin to create gaps
						}}
					>
						<Card video={item.video} />
					</div>
				))}
			</div>
			<button
				onClick={handlePrev}
				className="absolute top-1/2 left-2 transform -translate-y-1/2"
				style={arrowButtonStyle}
			>
				<BiSolidLeftArrow />
			</button>
			<button
				onClick={handleNext}
				className="absolute top-1/2 right-2 transform -translate-y-1/2"
				style={arrowButtonStyle}
			>
				<BiSolidRightArrow />
			</button>
		</div>
	);
};

export default CustomCarousel;
