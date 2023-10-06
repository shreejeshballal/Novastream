import { errorDark } from "../../assets";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../components/SecondaryButton";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] absolute left-0 top-0 w-full ">
      <img
        src={errorDark}
        className="brightness-[0.4] h-[100vh] w-full object-cover absolute -z-10"
        alt=""
      />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img src="/logo.svg" alt="logo" className="h-14 cursor-default" />
        <h1 className="text-9xl font-bold text-light my-3 cursor-default">
          404
        </h1>
        <h3 className="text-xl text-light-gray my-3 text-center px-4 cursor-default">
          Looks like you have headed to the wrong page
        </h3>
        <SecondaryButton
          label="Take me to the home page"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}

export default Error;
