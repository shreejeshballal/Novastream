import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <div className="w-full flex gap-2 items-center justify-center rounded-md bg-gray py-3  cursor-pointer hover:bg-dark-gray transition-all duration-300 ">
      <FcGoogle className="text-[1.5rem]" />
      <h1>Login with Google</h1>
    </div>
  );
};

export default GoogleButton;
