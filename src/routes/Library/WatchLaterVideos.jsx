import { useAuth } from "../../context/authContext";
import { AiOutlineClockCircle } from "react-icons/ai";
import { usePlaylist } from "../../context/playlistContext";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { deleteWatchLaterVideo } from "../../Api/videosApi";
import PageLoading from "../../components/Utils/PageLoading";
import Loader from "react-loader-spinner";
import DeleteHandler from "../../components/Utils/DeleteHandler";

function WatchLaterVideos() {
  const { user } = useAuth();
  const { state, watchLaterLoading, playlistDispatch } = usePlaylist();

  const { isLoading, mutate: deleteVideoMutate } = useMutation(
    deleteWatchLaterVideo,
    {
      onSuccess: data => {
        playlistDispatch({
          type: "FETCH_WATCH_LATER_VIDEOS",
          payload: data?.watchLaterPlaylist.videos
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
          <h1 className="font-medium text-black-1 text-lg">
            Watch Later Videos
          </h1>
          {state.watchLater && (
            <p className="text-sm text-gray-1">
              {state.watchLater.length} videos
            </p>
          )}
        </div>
        <AiOutlineClockCircle className="text-3xl text-black-2" />
      </div>

      {!user && (
        <div className="flex flex-col items-center m-8 py-6 border border-primary bg-yellow-50 rounded-md">
          <p className="text-black-1 text-center font-medium text-lg mb-5">
            Login to See Your Watch Later Videos
          </p>
          <button className="py-2 px-8 border-2 border-primary text-primary-red font-medium">
            <Link className="" to="/login">
              Login
            </Link>
          </button>
        </div>
      )}

      {watchLaterLoading ? (
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
          {state.watchLater?.map(item => {
            return (
              <Link key={item._id} to="/" className="flex items-start my-5">
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
                <DeleteHandler handleDelete={e => deleteVideo(e, item._id)} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WatchLaterVideos;
