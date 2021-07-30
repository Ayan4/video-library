import { useVideo } from "../context/videosContext";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { useTheme } from "../context/themeContext";

function MoreVideos() {
  const { allVideosLoading, videoState } = useVideo();
  const { theme } = useTheme();

  return (
    <div className={`font-poppins`}>
      <h1
        className={`font-medium ${
          theme ? "text-white-1" : "text-black-1"
        } text-lg border-l-4 border-primary pl-2.5 mx-5 my-5`}
      >
        More Videos
      </h1>

      {allVideosLoading ? (
        <div className="relative py-28">
          <Loader
            type="TailSpin"
            color="#A51818"
            height={50}
            width={50}
            className="text-black absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
          />
        </div>
      ) : (
        <div className="px-5">
          {videoState.videos?.slice(0, 8).map(item => {
            return (
              <Link
                key={item._id}
                to={`/videopage/${item._id}`}
                className="flex items-start my-5"
              >
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                  alt="video thumbnail"
                  className="rounded-lg w-2/5"
                />
                <div className="w-3/5 flex flex-col pr-1 ml-2.5">
                  <p
                    className={`${
                      theme ? "text-white-1" : "text-black-1"
                    } tracking-tight mb-1`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-sm ${
                      theme ? "text-gray-2" : "text-gray-1"
                    } tracking-tight`}
                  >
                    {item.channelName}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MoreVideos;
