import { useAuth } from "../../context/authContext";
import { AiOutlineLike } from "react-icons/ai";
import { usePlaylist } from "../../context/playlistContext";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { deleteLikedVideo } from "../../Api/videosApi";
import PageLoading from "../../components/Utils/PageLoading";
import Loader from "react-loader-spinner";

function LikedVideos() {
  const { user } = useAuth();
  const { state, likedVideosLoading, playlistDispatch } = usePlaylist();

  const { isLoading, mutate: deleteVideoMutate } = useMutation(
    deleteLikedVideo,
    {
      onSuccess: data => {
        playlistDispatch({
          type: "ADD_TO_LIKED_VIDEOS",
          payload: data.likedPlaylist.videos
        });
      }
    }
  );

  const deleteVideo = (e, videoId) => {
    e.preventDefault();
    deleteVideoMutate(videoId);
  };

  return (
    <div className="font-poppins h-screen">
      {isLoading && <PageLoading />}
      <div className="px-5 py-4 border-b border-white-1 flex justify-between items-center">
        <div className="flex flex-col mb-1.5 border-l-4 border-primary pl-2.5">
          <h1 className="font-medium text-black-1 text-lg">Liked Videos</h1>
          {state.liked && (
            <p className="text-sm text-gray-1">{state.liked.length} videos</p>
          )}
        </div>
        <AiOutlineLike className="text-3xl text-black-2" />
      </div>

      {!user && (
        <div className="flex flex-col items-center m-8 py-6 border border-primary bg-yellow-50 rounded-md">
          <p className="text-black-1 font-medium text-lg mb-5">
            Login to See Your Liked Videos
          </p>
          <button className="py-2 px-8 border-2 border-primary text-primary-red font-medium">
            <Link className="" to="/login">
              Login
            </Link>
          </button>
        </div>
      )}

      {likedVideosLoading ? (
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
          {state.liked?.map(item => {
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
                  <p className="text-sm text-black-1 tracking-tight mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-1 tracking-tight">
                    {item.channelName}
                  </p>
                </div>
                <div
                  // onClick={e => e.preventDefault()}
                  className="ml-auto relative rounded-full hover:bg-white-1"
                >
                  <BiDotsVerticalRounded className=" h-5 w-5 text-black-2" />
                  <select
                    onClick={e => e.preventDefault()}
                    className="w-5 text-transparent bg-transparent h-5 absolute top-0 left-0 cursor-pointer"
                  >
                    <option
                      className="text-sm font-poppins py-16 cursor-pointer"
                      onClick={e => deleteVideo(e, item._id)}
                    >
                      Delete
                    </option>
                  </select>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LikedVideos;
