import {
  AiOutlineHistory,
  AiOutlineLike,
  AiOutlineClockCircle
} from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function Library() {
  return (
    <div className="font-poppins h-screen">
      <div className="px-5 py-4 border-b border-white-1 flex justify-between items-center">
        <h1 className="font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
          Library
        </h1>
        <VscLibrary className="text-2xl text-black-2" />
      </div>
      <div className="text-black-2 px-5 mt-5 border-b border-white-1">
        <Link className="flex items-center mb-6" to="/liked">
          <AiOutlineLike className="text-3xl" />
          <div className="flex flex-col ml-3">
            <p className="font-medium">Liked Videos</p>
            <p className="text-sm text-gray-1">0 videos</p>
          </div>
        </Link>
        <Link className="flex items-center mb-6" to="/watch-later">
          <AiOutlineClockCircle className="text-3xl" />
          <div className="flex flex-col ml-3">
            <p className="font-medium">Watch Later Videos</p>
            <p className="text-sm text-gray-1">0 videos</p>
          </div>
        </Link>
        <Link className="flex items-center mb-6" to="/history">
          <AiOutlineHistory className="text-3xl" />
          <div className="flex flex-col ml-3">
            <p className="font-medium">Watch History</p>
            <p className="text-sm text-gray-1">0 videos</p>
          </div>
        </Link>
      </div>

      <div className="px-5">
        <h1 className="font-medium py-5 text-black-1 text-lg">
          Your Playlists
        </h1>
        <div className="">
          {/* map playlists below here */}
          <Link className="flex items-center mb-6 text-black-2" to="/playlist">
            <MdPlaylistAdd className="text-4xl" />
            <div className="flex flex-col ml-3">
              <p className="font-medium">Any Name Playlist</p>
              <p className="text-sm text-gray-1">2 videos</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Library;
