import ResponsivePlayer from "../../components/ResponsivePlayer/ResponsivePlayer";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchVideo } from "../../Api/videosApi";
import { HiChevronDown } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  AiOutlineLike,
  AiOutlineClockCircle,
  AiOutlineShareAlt,
  AiOutlineSend
} from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";

const VideoPage = () => {
  const { videoID } = useParams();

  const { data: video, isLoading, error } = useQuery(["video", videoID], () =>
    fetchVideo(videoID)
  );

  const handleLike = id => {
    console.log(id);
  };

  if (error) return <h1>Error occured in fetching video</h1>;

  if (isLoading) return <h1>Content is loading</h1>;

  return (
    <div className="h-screen">
      {/* Video */}
      <ResponsivePlayer videoId={video.videoId} />

      {/* Video info */}
      <div className="px-5 py-5 border-b border-white-1">
        <div className="flex items-center justify-between">
          <p className="font-poppins font-normal text-base pr-1 text-black-1">
            {video.title}
          </p>
          <HiChevronDown className="w-8 h-6 text-black-2" />
        </div>
        <div className="flex items-center mt-3">
          <p className="font-poppins font-normal text-xs text-gray-1 mr-4">
            {video.viewCount} views
          </p>
          <p className="font-poppins font-normal text-xs text-gray-1">
            {video.uploadDate}
          </p>
        </div>

        <div className="flex items-center justify-start mt-5 w-full">
          <button
            onClick={() => handleLike(video._id)}
            className="flex items-center tracking-tight font-poppins bg-white-1 px-2.5 py-1.5 rounded-3xl text-black-2 text-xs xs:text-sm mr-1 xs:mr-2"
          >
            <AiOutlineLike className="mr-1 w-4 xs:w-5 h-4 xs:h-5" />
            {video.likeCount}
          </button>
          <button className="flex items-center tracking-tight font-poppins bg-white-1 px-2.5 py-1.5 rounded-3xl text-black-2 text-xs xs:text-sm mr-1 xs:mr-2">
            <AiOutlineClockCircle className="mr-1 w-4 xs:w-5 h-4 xs:h-5" />
            Watch Later
          </button>
          <button className="flex items-center tracking-tight font-poppins bg-white-1 px-2.5 py-1.5 rounded-3xl text-black-2 text-xs xs:text-sm mr-1 xs:mr-2">
            <RiPlayListAddFill className="mr-1 w-3.5 xs:w-4 h-3.5 xs:h-4" />
            Save
          </button>
          <button className="flex items-center ml-auto bg-white-1 px-2.5 py-1.5 rounded-2xl">
            <AiOutlineShareAlt className="w-4 xs:w-5 h-4 xs:h-5 text-black-2" />
          </button>
        </div>
      </div>

      {/* channel info */}
      <div className="flex justify-start items-center px-5 py-2 border-b border-white-1">
        <img
          className="rounded-full w-10 h-10"
          src={video.channelDisplayPic}
          alt=""
        />
        <div className="flex flex-col font-poppins ml-2.5">
          <p className="text-base text-black-1">{video.channelName}</p>
          <p className="text-xs text-gray-1">{video.subscribers} Subscribers</p>
        </div>
      </div>

      {/* comment input */}
      <div className="px-5 font-poppins border-b border-white-1">
        <div className="flex items-center my-4">
          <p className="border-l-4 border-primary font-medium text-black-1 mr-2 pl-2.5">
            Comments
          </p>
          <p className="text-xs mt-0.5 text-black-2">{video.comments.length}</p>
        </div>

        <div className="flex py-2">
          <img
            className="rounded-full w-8 h-8"
            src={video.channelDisplayPic}
            alt=""
          />

          <form className="flex justify-between items-center w-full" action="">
            <input
              className="h-full w-full px-2 outline-none placeholder-white-2 text-black-1"
              type="text"
              placeholder="Add a public comment"
            />
            <button>
              <AiOutlineSend className="w-6 h-6 text-primary-red" />
            </button>
          </form>
        </div>
      </div>

      {/* comments */}
      <div className="px-5 font-poppins border-b border-white-1 mb-4">
        {/* map this div below */}
        {video.comments.map(item => {
          return (
            <div className="flex items-start py-4 w-full">
              <img
                className="rounded-full w-8 h-8 mt-0.5 border border-gray-500"
                src="https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=6&m=1288129985&s=612x612&w=0&h=V3wDE1mcLUtlaLUi4yeEp9civuxgB4RA60JehnQdaOY="
                alt=""
              />

              <div className="flex flex-col ml-3">
                <p className="text-xs text-black-2 mb-0.5">{item.name}</p>
                <p className="text-sm text-black-1 tracking-tight">
                  {item.comment}
                </p>
              </div>

              <button className="ml-auto">
                <BiDotsVerticalRounded className=" h-4 w-4 text-black-2" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoPage;
