import { MdPlaylistAdd } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSinglePlaylist } from "../../Api/videosApi";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { deletePlaylistVideo } from "../../Api/videosApi";
import { usePlaylist } from "../../context/playlistContext";

function Playlist() {
  const { playlistId } = useParams();
  const { playlistDispatch } = usePlaylist();

  const { data, isLoading, refetch } = useQuery(
    ["single playlist", playlistId],
    () => fetchSinglePlaylist(playlistId)
  );

  const { mutate: deleteVideoMutate } = useMutation(deletePlaylistVideo, {
    onSuccess: data => {
      playlistDispatch({
        type: "FETCH_PLAYLISTS",
        payload: data.playlists
      });
      refetch();
    }
  });

  const deleteVideo = (e, videoId) => {
    e.preventDefault();
    const data = { playlistId, videoId };
    deleteVideoMutate(data);
  };

  if (isLoading) return <h1 className="text-medium text-4xl">Loading......</h1>;

  return (
    <div className="font-poppins h-screen">
      <div className="px-5 py-4 border-b border-white-1 flex justify-between items-center">
        <h1 className="font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
          {data?.playlist.name}
        </h1>
        <MdPlaylistAdd className="text-4xl text-black-2" />
      </div>

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
              <div className="ml-auto relative rounded-full hover:bg-white-1">
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
    </div>
  );
}

export default Playlist;
