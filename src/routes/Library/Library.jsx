import {
  AiOutlineHistory,
  AiOutlineLike,
  AiOutlineClockCircle
} from "react-icons/ai";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../context/playlistContext";
import { useMutation } from "react-query";
import { deletePlaylist } from "../../Api/videosApi";
import toast from "react-hot-toast";
import DeleteModal from "../../components/Modal/DeleteModal";
import Loader from "react-loader-spinner";
import Sidebar from "../../components/Navbar/Sidebar";
import { useTheme } from "../../context/themeContext";

function Library() {
  const { state, playlistLoading, playlistDispatch } = usePlaylist();
  const { theme } = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [deletePlaylistId, setDeletePlaylistId] = useState("");

  const {
    isLoading: playlistDeleteLoading,
    mutate: deleteMutate
  } = useMutation(deletePlaylist, {
    onSuccess: data => {
      playlistDispatch({
        type: "FETCH_PLAYLISTS",
        payload: data.playlists
      });
      toast.success("Playlist Deleted");
      setOpenModal(false);
    }
  });

  const handleDelete = (e, playlistId) => {
    e.preventDefault();
    setDeletePlaylistId(playlistId);
    setOpenModal(true);
  };

  return (
    <div
      className={`font-poppins min-h-screen mb-16 lg:mb-0 lg:h-full flex ${theme &&
        "bg-dark-bgr"}`}
    >
      <DeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        deletePlaylistId={deletePlaylistId}
        deleteMutate={deleteMutate}
        playlistDeleteLoading={playlistDeleteLoading}
      />

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
            Library
          </h1>
          <VscLibrary
            className={`text-3xl ${theme ? "text-white-1" : "text-black-2"}`}
          />
        </div>
        <div
          className={`${
            theme
              ? "text-white-1 border-dark-bor"
              : "text-black-2 border-white-1"
          } px-5 mt-5 border-b`}
        >
          <Link
            className={`flex items-center mb-6 lg:mb-4 transition-all ${
              theme
                ? "lg:hover:bg-dark-bor lg:hover:bg-opacity-40"
                : "lg:hover:bg-white-0"
            } rounded lg:p-2`}
            to="/likedvideos"
          >
            <AiOutlineLike className="text-3xl" />
            <div className="flex flex-col ml-3">
              <p className="font-medium">Liked Videos</p>
              <p className={`text-sm ${theme ? "text-gray-2" : "text-gray-1"}`}>
                {state?.liked?.length} videos
              </p>
            </div>
          </Link>
          <Link
            className={`flex items-center mb-6 lg:mb-4 transition-all ${
              theme
                ? "lg:hover:bg-dark-bor lg:hover:bg-opacity-40"
                : "lg:hover:bg-white-0"
            } rounded lg:p-2`}
            to="/watchlater"
          >
            <AiOutlineClockCircle className="text-3xl" />
            <div className="flex flex-col ml-3">
              <p className="font-medium">Watch Later Videos</p>
              <p className={`text-sm ${theme ? "text-gray-2" : "text-gray-1"}`}>
                {state?.watchLater?.length} videos
              </p>
            </div>
          </Link>
          <Link
            className={`flex items-center mb-6 lg:mb-4 transition-all ${
              theme
                ? "lg:hover:bg-dark-bor lg:hover:bg-opacity-40"
                : "lg:hover:bg-white-0"
            } rounded lg:p-2`}
            to="/history"
          >
            <AiOutlineHistory className="text-3xl" />
            <div className="flex flex-col ml-3">
              <p className="font-medium">History</p>
              <p className={`text-sm ${theme ? "text-gray-2" : "text-gray-1"}`}>
                {state?.history?.length} videos
              </p>
            </div>
          </Link>
        </div>

        <div className="px-5">
          <h1
            className={`font-medium py-5 text-lg ${
              theme ? "text-white-1" : "text-black-1"
            }`}
          >
            Your Playlists
          </h1>
          {/* map playlists below here */}
          {playlistLoading ? (
            <div className="relative py-20">
              <Loader
                type="TailSpin"
                color="#A51818"
                height={50}
                width={50}
                className="text-black absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
              />
            </div>
          ) : (
            <div className="mb-0 lg:mb-0">
              {state.playlists?.map(item => {
                return (
                  <Link
                    key={item._id}
                    className={`flex items-center justify-between mb-6 lg:mb-4 ${
                      theme
                        ? "text-white-1 lg:hover:bg-dark-bor lg:hover:bg-opacity-40"
                        : "text-black-2 lg:hover:bg-white-0"
                    } transition-all rounded lg:p-2`}
                    to={`/playlist/${item._id}`}
                  >
                    <div className="flex items-center">
                      <MdPlaylistAdd className="text-4xl" />
                      <div className="flex flex-col ml-3">
                        <p className="font-medium">{item.name}</p>
                        <p
                          className={`text-sm ${
                            theme ? "text-gray-2" : "text-gray-1"
                          }`}
                        >
                          {item.videos.length} videos
                        </p>
                      </div>
                    </div>
                    <div>
                      <BiTrash
                        onClick={e => handleDelete(e, item._id)}
                        className="text-2xl"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Library;
