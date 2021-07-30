import { Link, useLocation } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import { useVideo } from "../context/videosContext";
import Loader from "react-loader-spinner";
import useViewCountShortner from "./Utils/useViewCountShortner";
import { useTheme } from "../context/themeContext";

const VideoCard = () => {
  const { videoState, allVideosLoading, error } = useVideo();
  const [viewNumber] = useViewCountShortner();
  const { theme } = useTheme();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const queryParam = useQuery().get("category");

  let transformedData;

  const getCategoryData = () => {
    if (queryParam) {
      transformedData = videoState.videos?.filter(
        item => item.category === queryParam
      );
    } else {
      transformedData = videoState.videos;
    }
    return transformedData;
  };

  getCategoryData();

  if (error) {
    return <h1>An error has occured</h1>;
  }

  return (
    <div className="px-5 pb-20 lg:pb-5">
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
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {getCategoryData()?.map(item => {
            return (
              <Link
                key={item._id}
                className="my-2.5 flex flex-col"
                to={`/videopage/${item._id}`}
              >
                <div className="w-full relative">
                  <BsFillPlayFill className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-16 h-16 text-white" />
                  <img
                    src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                    alt="video thumbnail"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="flex items-start mt-2.5">
                  <img
                    className="rounded-full w-10 h-10"
                    src={item.channelDisplayPic}
                    alt="DP"
                  />
                  <div className="ml-3.5 w-full">
                    <p
                      className={`font-poppins tracking-tight text-base lg:text-sm xl:text-base ${
                        theme ? "text-white-1" : "text-black-1"
                      }`}
                    >
                      {item.title}
                    </p>
                    <div
                      className={`flex ${
                        theme ? "text-white-2" : "text-gray-1"
                      } text-xs font-poppins justify-between items-center mt-1.5`}
                    >
                      {viewNumber ? (
                        <p>
                          {item.channelName} - {parseInt(item.viewCount)}k views
                        </p>
                      ) : (
                        <p>
                          {item.channelName} - {item.viewCount} views
                        </p>
                      )}

                      <p> {item.uploadDate} </p>
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
