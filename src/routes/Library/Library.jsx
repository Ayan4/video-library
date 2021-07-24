import {
  AiOutlineHistory,
  AiOutlineLike,
  AiOutlineClockCircle
} from "react-icons/ai";
import ReactModal from "react-modal";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../context/playlistContext";
import { useMutation } from "react-query";
import { deletePlaylist } from "../../Api/videosApi";
import toast from "react-hot-toast";

function Library() {
  const { state, playlistLoading, playlistDispatch } = usePlaylist();
  const [openModal, setOpenModal] = useState(false);
  const [deletePlaylistId, setDeletePlaylistId] = useState("");

  const { mutate: deleteMutate } = useMutation(deletePlaylist, {
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
    <div className="font-poppins h-screen">
      <ReactModal
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
        className="border border-white-1 mx-14 mt-6 bg-white font-poppins rounded"
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <p>Are you sure you want to delete this playlist ?</p>
        <div className="flex justfy-between">
          <button onClick={() => deleteMutate(deletePlaylistId)}>Delete</button>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
      </ReactModal>
      <div className="px-5 py-4 border-b border-white-1 flex justify-between items-center">
        <h1 className="font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
          Library
        </h1>
        <VscLibrary className="text-3xl text-black-2" />
      </div>
      <div className="text-black-2 px-5 mt-5 border-b border-white-1">
        <Link className="flex items-center mb-6" to="/likedvideos">
          <AiOutlineLike className="text-3xl" />
          <div className="flex flex-col ml-3">
            <p className="font-medium">Liked Videos</p>
            <p className="text-sm text-gray-1">0 videos</p>
          </div>
        </Link>
        <Link className="flex items-center mb-6" to="/watchlater">
          <AiOutlineClockCircle className="text-3xl" />
          <div className="flex flex-col ml-3">
            <p className="font-medium">Watch Later Videos</p>
            <p className="text-sm text-gray-1">0 videos</p>
          </div>
        </Link>
        <Link className="flex items-center mb-6" to="/history">
          <AiOutlineHistory className="text-3xl" />
          <div className="flex flex-col ml-3">
            <p className="font-medium">History</p>
            <p className="text-sm text-gray-1">0 videos</p>
          </div>
        </Link>
      </div>

      <div className="px-5">
        <h1 className="font-medium py-5 text-black-1 text-lg">
          Your Playlists
        </h1>
        {/* map playlists below here */}
        {playlistLoading ? (
          <h1 className="text-medium text-4xl">Loading......</h1>
        ) : (
          <div className="">
            {state.playlists?.map(item => {
              return (
                <Link
                  key={item._id}
                  className="flex items-center justify-between mb-6 text-black-2"
                  to={`/playlist/${item._id}`}
                >
                  <div className="flex items-center">
                    <MdPlaylistAdd className="text-4xl" />
                    <div className="flex flex-col ml-3">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-1">
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
  );
}

export default Library;
