
const Tooltip = ({ text }) => {
	return (
		<span className="absolute w-auto p-2 m-2 min-w-max left-[4.5rem] rounded-md shadow-md text-blend-light bg-dark-gray text-xs font-bold transition-all duration-100 scale-0 origin-left md:group-hover:scale-100">
			{text}
		</span>
	);
};

export default Tooltip;
