import { MdPlaylistAdd } from "react-icons/md";
import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSinglePlaylist } from "../../Api/videosApi";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { deletePlaylistVideo } from "../../Api/videosApi";
import { usePlaylist } from "../../context/playlistContext";
import DeleteHandler from "../../components/Utils/DeleteHandler";
import PageLoading from "../../components/Utils/PageLoading";

function Playlist() {
  const { playlistId } = useParams();
  const { playlistDispatch } = usePlaylist();

  const { data, isLoading, refetch } = useQuery(
    ["single playlist", playlistId],
    () => fetchSinglePlaylist(playlistId)
  );

  const { isLoading: deleteLoading, mutate: deleteVideoMutate } = useMutation(
    deletePlaylistVideo,
    {
      onSuccess: data => {
        playlistDispatch({
          type: "FETCH_PLAYLISTS",
          payload: data.playlists
        });
        refetch();
      }
    }
  );

  const deleteVideo = (e, videoId) => {
    e.preventDefault();
    const data = { playlistId, videoId };
    deleteVideoMutate(data);
  };

  return (
    <div className="font-poppins h-screen">
      {deleteLoading && <PageLoading />}
      <div className="px-5 py-4 border-b border-white-1 flex justify-between items-center">
        <h1 className="font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
          {data?.playlist.name}
        </h1>
        <MdPlaylistAdd className="text-4xl text-black-2" />
      </div>

      {isLoading ? (
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
          {data?.playlist.videos.map(item => {
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
                <DeleteHandler handleDelete={e => deleteVideo(e, item._id)} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Playlist;
