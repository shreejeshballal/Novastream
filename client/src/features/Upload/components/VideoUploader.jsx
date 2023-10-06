import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineYoutube } from "react-icons/ai";

const VideoUploader = ({ video, setVideo }) => {
  const [filename, setFilename] = useState(null);

  const onUploadClick = () => {
    const uploader = document.getElementById("videoUploader");
    uploader.click();
  };

  const oneRemoveVideoClick = () => {
    setVideo(null);
    setFilename(null);
  };

  const handleVideoChange = (e) => {
    let file = e.target.files[0];
    if (!file.name.match(/\.(mp4|webm)$/i)) {
      alert("not Supported file image");
    } else {
      if (file.size > 40000000) {
        alert("File size must be less than 1 MB");
      } else {
        const url = URL.createObjectURL(file);
        setFilename(file.name);
        setVideo(url);

        alert("File was successfully uploaded");
      }
    }
  };
  return !video ? (
    <div
      className="w-full h-[12rem] rounded-md relative ring transition-all duration-200 hover:bg-gray ring-dark-gray cursor-pointer items-center flex  p-4 justify-center flex-col"
      onClick={() => onUploadClick()}
    >
      <AiOutlineYoutube className="text-blend-light opacity-75 text-[3rem] lg:text-[4rem]" />
      <h1 className="text-blend-light opacity-75 lg:text-[1.2rem] w-full text-center">
        Upload Video
      </h1>
      <span className="text-blend-light opacity-50 text-[0.7rem] lg:text-[0.8rem] mt-[-0.1rem]">
        [ .webm .mp4 ]
      </span>
      <input
        id="videoUploader"
        type="file"
        name="video"
        onChange={(e) => handleVideoChange(e)}
        hidden
      />
    </div>
  ) : (
    <div className="relative h-[12rem] w-full rounded-md overflow-hidden ring-dark-gray ring flex justify-center items-center ">
      <video className="object-contain h-[12rem] w-full absolute ">
        <source src={video} type="video/mp4" />
        <source src={video} type="video/webm" />
      </video>

      <div className="absolute flex bg-dark-gray w-full bottom-0 p-1 justify-center items-center">
        <h1 className="text-blend-light  w-full text-center p-1    ">
          {filename}
        </h1>
        <AiOutlineCloseCircle
          className="text-3xl right-0   hover:text-light-gray transition-all cursor-pointer"
          onClick={() => oneRemoveVideoClick()}
        />
      </div>
    </div>
  );
};

export default VideoUploader;
