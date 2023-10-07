import React, { useContext } from "react";
import SecondaryButton from "./SecondaryButton";
import { AuthModalContext } from "../context/AuthModalContext";
import { Moonlight } from "../assets";

const Locked = () => {
	const { openAuthModal } = useContext(AuthModalContext);
	return (
		<div className="h-full mt-[-8rem] sm:mt-[-5rem] w-full sm:ml-[-5.5rem] z-[0] flex justify-center items-center absolute text-white ">
			<img
				className="absolute -z-10 brightness-[0.4] p-4"
				src={Moonlight}
				alt=""
			/>
			<div className="flex flex-col gap-5 justify-center items-center">
				<h1 className="font-bold text-2xl sm:text-4xl text-center">
					It appears that you haven't logged in.
				</h1>
				<SecondaryButton label={"Login"} onClick={openAuthModal} />
			</div>
		</div>
	);
};

export default Locked;
