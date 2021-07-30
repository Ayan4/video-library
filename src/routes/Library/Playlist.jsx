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
import useViewCountShortnerVideo from "../../components/Utils/useViewCountShortnerVideo";
import Sidebar from "../../components/Navbar/Sidebar";
import { useTheme } from "../../context/themeContext";

function Playlist() {
  const { playlistId } = useParams();
  const { playlistDispatch } = usePlaylist();
  const { theme } = useTheme();
  const [viewNumber] = useViewCountShortnerVideo();

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
    <div
      className={`font-poppins min-h-screen mb-16 lg:mb-0 lg:h-full flex ${theme &&
        "bg-dark-bgr"}`}
    >
      {deleteLoading && <PageLoading />}

      <div className="w-1/5 hidden lg:block">
        <Sidebar />
      </div>

      <div className="w-full lg:w-4/5">
        <div
          className={`px-5 py-4 border-b ${
            theme ? "border-dark-bor" : "border-white-1"
          } flex justify-between items-center`}
        >
          <h1
            className={`font-medium mb-1.5 ${
              theme ? "text-white-1" : "text-black-1"
            } text-lg border-l-4 border-primary pl-2.5`}
          >
            {data?.playlist.name}
          </h1>
          <MdPlaylistAdd
            className={`text-4xl ${theme ? "text-white-1" : "text-black-2"}`}
          />
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
                  className={`flex items-start my-5 transition-all rounded-lg lg:p-2 ${
                    theme
                      ? "lg:hover:bg-dark-bor lg:hover:bg-opacity-40"
                      : "lg:hover:bg-white-0"
                  }`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                    alt="video thumbnail"
                    className="rounded-lg w-2/5"
                  />
                  <div className="w-3/5 flex flex-col pr-1 ml-2.5">
                    <p
                      className={`text-sm lg:text-lg ${
                        theme ? "text-white-1" : "text-black-1"
                      } tracking-tight lg:tracking-normal mb-1 lg:mb-1.5`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-xs lg:text-base ${
                        theme ? "text-gray-2" : "text-gray-1"
                      } tracking-tight lg:tracking-normal`}
                    >
                      {item.channelName}
                    </p>

                    <div className="flex items-center mt-3">
                      {viewNumber ? (
                        <p
                          className={`font-poppins font-normal text-xs lg:text-sm ${
                            theme ? "text-gray-2" : "text-gray-1"
                          } mr-4`}
                        >
                          {parseInt(item.viewCount)}k views
                        </p>
                      ) : (
                        <p
                          className={`font-poppins font-normal text-xs lg:text-sm ${
                            theme ? "text-gray-2" : "text-gray-1"
                          } mr-4`}
                        >
                          {item.viewCount} views
                        </p>
                      )}
                      <p
                        className={`font-poppins font-normal text-xs lg:text-sm ${
                          theme ? "text-gray-2" : "text-gray-1"
                        }`}
                      >
                        {item.uploadDate}
                      </p>
                    </div>
                  </div>
                  <DeleteHandler handleDelete={e => deleteVideo(e, item._id)} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Playlist;
