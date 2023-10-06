import React, { useContext, useState } from "react";
import { AuthModalContext } from "../../../context/AuthModalContext";
import PrimaryButton from "../../../components/PrimaryButton";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../../../components/Input";
import GoogleButton from "../components/GoogleButton";
import { toast } from "sonner";
import Toast from "../../../components/Toast";

const Form = () => {
  const [authType, setAuthType] = useState("Login"); // Register or Login state
  const { closeAuthModal } = useContext(AuthModalContext);

  // Form data consiting of email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle change in form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false); // Loading state to wait for response

  // Form submit function
  const handleAuth = (e) => {
    e.preventDefault();
    setLoading(true);
    toast.custom(() => <Toast label={"hello world"} />);
  };

  return (
    <div className="bg-background px-8 sm:px-12 pt-7 pb-10 darkshadow relative w-[100%] sm:w-[26rem] mx-5 rounded-lg text-light  z-30 flex items-center flex-col gap-5 ">
      <h1 className="text-[2.2rem] font-bold    ">
        {authType == "Login" ? "Login" : "Register"}
      </h1>
      <AiOutlineClose
        className="absolute text-1xl  rounded-full  p-1 h-7 w-7 right-4 top-4 hover:text-light-gray transition-all cursor-pointer"
        onClick={closeAuthModal}
      />

      {/* /Form elements  */}
      <form className="flex flex-col w-full justify-center items-center gap-[0.5rem]">
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.password}
        />

        {authType == "Register" && (
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          />
        )}
        {authType == "Login" && (
          <p className="my-[0.2rem] text-light-gray cursor-pointer - hover:text-slate-400 transition-all duration-300">
            Forgot Password?
          </p>
        )}

        <PrimaryButton label="Submit" onClick={handleAuth} loading={loading} />

        {authType == "Login" ? (
          <p
            onClick={() => setAuthType("Register")}
            className="my-[0.2rem] text-light-gray cursor-pointer transition-all duration-300"
          >
            Don't have an account?{" "}
            <span className="text-slate-300  ">Register</span>
          </p>
        ) : (
          <p
            onClick={() => setAuthType("Login")}
            className="my-[0.2rem] text-light-gray cursor-pointer transition-all duration-300"
          >
            Already have an account?{" "}
            <span className="text-slate-300  ">Login</span>
          </p>
        )}
      </form>
      <div className="flex items-center justify-center w-full gap-2">
        <div className="h-[1px] flex-2 bg-light-gray w-full" />
        <p className="text-light-gray text-[1.2rem]">or</p>
        <div className="h-[1px] flex-2 bg-light-gray w-full" />
      </div>
      <GoogleButton />
    </div>
  );
};

export default Form;
