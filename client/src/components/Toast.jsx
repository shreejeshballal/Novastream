import React from "react";

import {
	FaCheckCircle,
	FaExclamationCircle,
	FaTimesCircle,
	FaInfoCircle,
} from "react-icons/fa";

const Toast = ({ label, subhead, type }) => {
	let borderColor = "";
	let icon = null;

	switch (type) {
		case "success":
			borderColor = "border-green-500";
			icon = <FaCheckCircle className="text-green-500 w-6 h-6" />;
			break;
		case "failed":
			borderColor = "border-red-500";
			icon = <FaTimesCircle className="text-red-500 w-6 h-6" />;
			break;
		case "warning":
			borderColor = "border-yellow-500";
			icon = <FaExclamationCircle className="text-yellow-500 w-6 h-6" />;
			break;
		default:
			borderColor = "border-blue-500";
			icon = <FaInfoCircle className="text-blue-500 w-6 h-6" />;
			break;
	}

	return (
		<div
			className={`bg-[#231F20] sm:w-full sm:mb-16 lg:mb-0 p-5 h-fit lg:w-[20rem] rounded-lg border-2 ${borderColor}`}
		>
			<div className="flex items-center">
				<div className="mr-2">{icon}</div>
				<div>
					<h1 className="text-[#EFEFEF] ml-1 text-lg font-bold">{label}</h1>
					<h2 className="text-[#646368] ml-1 text-sm">{subhead}</h2>
				</div>
			</div>
		</div>
	);
};

export default Toast;
