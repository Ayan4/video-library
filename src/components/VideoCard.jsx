import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { useVideo } from "../context/videosContext";
// import { useAuth } from "../../context/authContext";

const VideoCard = () => {
  const { videoState, isLoading, error } = useVideo();
  // console.log(state.videos);

  if (error) {
    return <h1>An error has occured and pointed out by react query</h1>;
  }

  return (
    <div className="mt-5 px-5">
      <h1 className="font-poppins font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
        Recommended
      </h1>

      {isLoading && <FiLoader style={{ width: "5rem", height: "5rem" }} />}

      <div className="flex flex-col">
        {videoState.videos?.map(item => {
          return (
            <Link
              key={item._id}
              className="my-5 flex flex-col"
              to={`/videopage/${item._id}`}
            >
              <div className="w-full relative -z-2">
                <FaPlay className="absolute inset-2/4 w-14 h-14 text-white" />
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                  alt="video thumbnail"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="flex items-center mt-2.5">
                <img
                  className="rounded-full w-10 h-10"
                  src={item.channelDisplayPic}
                  alt="channel profile pic"
                />
                <div className="ml-3.5 w-full">
                  <p className="font-poppins tracking-tight text-base text-black-1">
                    {item.title}
                  </p>
                  <div className="flex font-poppins justify-between items-center mt-1.5">
                    <p className="text-gray-1 text-xs">
                      {item.channelName} - {item.viewCount} views
                    </p>
                    <p className="text-gray-1 text-xs"> {item.uploadDate} </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoCard;
