import React, { useState } from "react";
import Input from "../../components/Input";
import { AiOutlineClose } from "react-icons/ai";
import ImageUploader from "./ImageUploader";
import VideoUploader from "./VideoUploader";
import PrimaryButton from "../../components/PrimaryButton";

const Upload = () => {
  const [loading, setLoading] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const onUploadSubmit = () => {};

  const handleAddTag = (e) => {
    let tag = e.target.value;
    let n = tag.length;

    if (tag[0] == " ") {
      e.target.value = "";
    } else if (tag[n - 1] === " ") {
      setTagList([...tagList, tag]);
      e.target.value = "";
    }
  };

  const handleRemoveTag = (key) => {
    let newList = tagList.filter((item, index) => index !== key);
    setTagList(newList);
  };

  return (
    <div className="text-light h-full items-center md:items-start w-full px-6 pt-[3rem]  sm:pt-[3rem] sm:pl-[3rem]  flex flex-col gap-10">
      <h1 className="text-3xl font-bold w-full   text-center opacity-85 md:text-left lg:text-[2.5rem]">
        Upload your video
      </h1>
      <form className="flex flex-col gap-3 w-full lg:flex-row lg:min-w-[50rem] lg:max-w-[80%]">
        <div className="flex gap-3 flex-col lg:flex-1 lg:h-[full] ">
          <Input name="title" placeholder="Title" />
          <textarea
            className="bg-background h-full text-[0.9rem] text-blend-light min-h-[9rem] ring-dark-gray rounded-lg ring-2 px-4 py-2 w-full transition-all duration-200 hover:bg-gray resize-none"
            name="description"
            placeholder="Description"
          />
          <Input
            name={"tags"}
            placeholder={"Type tags separated with space"}
            onChange={(e) => handleAddTag(e)}
            type={"text"}
          />
          {tagList.length > 0 && (
            <div className="flex-wrap flex gap-1  gap-x-2 justify-center">
              {tagList.map((item, key) => {
                return (
                  <div
                    onClick={() => handleRemoveTag(key)}
                    className="bg-dark-gray py-2  px-5  text-[0.9rem] p text-blend-light rounded-lg flex items-center justify-between  gap-2 hover:bg-light-gray  transition-all cursor-pointer "
                    key={key}
                  >
                    {item}
                    <AiOutlineClose className=" right-1 text-[0.8rem] " />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3  lg:flex-1">
          <ImageUploader setThumbnail={setThumbnail} thumbnail={thumbnail} />
          <VideoUploader setVideo={setVideo} video={video} />
        </div>
      </form>
      <PrimaryButton
        label={"Upload"}
        loading={loading}
        onClick={() => onUploadSubmit()}
      />
    </div>
  );
};

export default Upload;
