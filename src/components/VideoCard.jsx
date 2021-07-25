import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import { useVideo } from "../context/videosContext";
import Loader from "react-loader-spinner";

const VideoCard = () => {
  const { videoState, allVideosLoading, error } = useVideo();

  if (error) {
    return <h1>An error has occured</h1>;
  }

  return (
    <div className="mt-5 px-5 mb-20">
      <h1 className="font-poppins font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
        Recommended
      </h1>

      {allVideosLoading ? (
        <div className="relative py-16">
          <Loader
            type="TailSpin"
            color="#A51818"
            height={50}
            width={50}
            className="text-black absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
          />
        </div>
      ) : (
        <div className="flex flex-col">
          {videoState.videos?.map(item => {
            return (
              <Link
                key={item._id}
                className="my-5 flex flex-col"
                to={`/videopage/${item._id}`}
              >
                <div className="w-full relative -z-2">
                  <BsFillPlayFill className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-16 h-16 text-white" />
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
      )}
    </div>
  );
};

export default VideoCard;
