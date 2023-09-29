import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
const ImageUploader = ({ thumbnail, setThumbnail }) => {
  const [filename, setFilename] = useState(null);

  const onUploadClick = () => {
    const thumbnailUploader = document.getElementById("thumbnailUploader");
    thumbnailUploader.click();
  };

  const onRemoveThumbnailClick = () => {
    setThumbnail(null);
    setFilename(null);
  };

  const handleThumbnailChange = (e) => {
    let file = e.target.files[0];
    if (!file.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
      alert("not Supported file image");
    } else {
      if (file.size > 1000000) {
        alert("File size must be less than 1 MB");
      } else {
        const url = URL.createObjectURL(file);
        setFilename(file.name);
        setThumbnail(url);

        alert("File was successfully uploaded");
      }
    }
  };

  return !thumbnail ? (
    <div
      className="w-full h-[12rem] rounded-md relative ring transition-all duration-200 hover:bg-gray ring-dark-gray cursor-pointer items-center flex  p-4 justify-center flex-col"
      onClick={() => onUploadClick()}
    >
      <BiImageAdd className="text-blend-light opacity-75 text-[3rem]  lg:text-[4rem]" />
      <h1 className="text-blend-light opacity-75  lg:text-[1.2rem] w-full text-center">
        Upload Thumbnail
      </h1>
      <span className="text-blend-light opacity-75 text-[0.7rem]  lg:text-[0.9rem] mt-[-0.1rem]">
        ( .jpg .jpeg .png .webp )
      </span>
      <input
        id="thumbnailUploader"
        type="file"
        name="thumbnail"
        onChange={(e) => handleThumbnailChange(e)}
        hidden
      />
    </div>
  ) : (
    <div className="relative h-[12rem] w-full rounded-md overflow-hidden ring-dark-gray ring flex justify-center items-center ">
      <img
        src={thumbnail}
        className="object-contain h-[12rem] w-full absolute"
      />

      <div className="absolute flex bg-dark-gray w-full bottom-0 p-1 justify-center items-center">
        <h1 className="text-blend-light  w-full text-center p-1    ">
          {filename}
        </h1>
        <AiOutlineCloseCircle
          className="text-3xl  right-0   hover:text-light-gray transition-all cursor-pointer"
          onClick={() => onRemoveThumbnailClick()}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
