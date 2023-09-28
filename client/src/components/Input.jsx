import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Input = ({ type, name, placeholder, onChange, value }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const handleTogglePassword = () => {
    setTogglePassword((prev) => !prev);
  };
  return (
    <div className="w-full relative flex justify-end items-center">
      <input
        className="bg-background ring-dark-gray rounded-lg ring-2 px-4 py-2 w-full transition-all duration-200 hover:bg-light-gray"
        type={
          type == "password" ? (togglePassword ? "text" : "password") : type
        }
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
      {type == "password" ? (
        togglePassword ? (
          <AiOutlineEye
            className="absolute  text-[1.3rem] text-light  opacity-50  hover:text-slate-300 transition-all w-7 h-full mr-3"
            onClick={handleTogglePassword}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="absolute  text-[1.3rem] text-light opacity-50 hover:text-slate-300 transition-all  w-7 h-full mr-3"
            onClick={handleTogglePassword}
          />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
