import { errorDark } from "../assets";

function Error() {
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
        <h3 className="text-xl text-light-gray my-3 text-center cursor-default">
          Looks like you have headed to the wrong page
        </h3>
        <button className="bg-dark-gray my-3 px-5 py-2 rounded-md text-light hover:bg-light-gray hover:text-dark-gray transition-all cursor-pointer">
          Take me to the home page
        </button>
      </div>
    </div>
  );
}

export default Error;
