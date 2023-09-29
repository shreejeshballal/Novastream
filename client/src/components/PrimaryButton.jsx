import ClipLoader from "react-spinners/ClipLoader";
const PrimaryButton = ({ label, onClick, loading }) => {
  return (
    <div
      onClick={onClick}
      className={`flex w-full cursor-pointer bg-light-ascent max-w-[20rem] text-light items-center rounded-md transition-all duration-300 ${
        !loading && "hover:bg-light"
      } hover:text-black py-2 font-dmsans justify-center  gap-2 `}
    >
      {!loading ? (
        label
      ) : (
        <ClipLoader
          className=""
          color="#ffffff"
          size={20}
          speedMultiplier={0.9}
        />
      )}
    </div>
  );
};

export default PrimaryButton;
