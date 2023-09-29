const Tooltip = ({ text, pos }) => {
  const className = `absolute w-auto p-2 m-2 min-w-max ${
    pos == "left" ? "left-[4.5rem]" : ""
  } rounded-md shadow-md text-blend-light bg-dark-gray text-xs font-bold transition-all duration-100 scale-0 origin-${pos} md:group-hover:scale-100`;
  return <span className={className}>{text}</span>;
};

export default Tooltip;
