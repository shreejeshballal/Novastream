
const Card = ({ video }) => {
    return (
        <div className="m-6 text-white font-dmSans md:max-w-sm md:max-h-sm min-w-sm sm:max-w-lg">

            <div className=" my-2 relative ">
                <img className="rounded-md" src={video.thumbnail} alt={video.title} />
                <div className="absolute bottom-0 right-0 mx-1.5 my-1 p-1 rounded-lg bg-opacity-70 bg-black">{video.length}</div>
            </div>
            <div className="flex">
                <img className="h-12 w-12 mx-2 my-2 rounded-full mr-3" src={video.uploadedByImage} />
                <div className="min-w-0">
                    <div className="text-lg line-clamp-2 leading-snug">{video.title}</div>
                    <div className=" text-[#aaaaaa] text-sm font-light">
                        <div className="">
                            <span>
                                {video.uploadedBy}
                            </span>
                        </div>
                        <div>
                            <span>{video.viewCount} views</span> •
                            <span className="justify-right"> {video.uploadDate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
