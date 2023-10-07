const Card = ({ video }) => {
  return (
    <div className="m-6 text-white font-dmSans flex flex-col gap-2  font-dmSans md:max-w-sm md:max-h-sm min-w-sm sm:max-w-lg ">
      <div className="relative">
        <img
          className="rounded-md w-96 h-60 object-cover"
          src={video.thumbnail}
          alt={video.title}
        />
        <div className="absolute bottom-0 right-0 mx-1.5 my-1 p-1 rounded-lg bg-opacity-70 bg-black">
          {video.timestamp}
        </div>
      </div>
      <div className="flex">
        <img
          className="h-12 w-12 mx-2 my-2 rounded-full mr-3 object-cover"
          src={video.uploadedByImage}
        />
        <div className="min-w-0">
          <div className="text-lg line-clamp-2 leading-snug">{video.title}</div>
          <div className=" text-[#aaaaaa] text-sm font-light">
            <div className="">
              <span>{video.uploadedBy}</span>
            </div>
            <div>
              <span>{video.viewCount} views</span> •
              <span className="justify-right">
                {" "}
                {video.uploadDate} years ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
