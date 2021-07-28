import { Link } from "react-router-dom";
import {
  AiOutlineHistory,
  AiOutlineLike,
  AiOutlineClockCircle
} from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { FiHome } from "react-icons/fi";

function CompactSideBar() {
  return (
    <div
      style={{ top: "4.18rem" }}
      className="border-r border-white-1 h-screen bottom-0 sticky font-poppins w-24"
    >
      <div className="flex flex-col px-4 py-4 text-black-2">
        <Link
          className="flex flex-col items-center mb-3 transition-all hover:bg-white-1 hover:bg-opacity-80 p-2 rounded-lg"
          to="/"
        >
          <div>
            <FiHome className="text-3xl text-primary-red" />
          </div>
          <p className="font-medium">Home</p>
        </Link>

        <Link
          className="flex flex-col items-center mb-3 transition-all hover:bg-white-1 hover:bg-opacity-80 p-2 rounded-lg"
          to="/likedvideos"
        >
          <div>
            <AiOutlineLike className="text-3xl" />
          </div>
          <p className="font-medium">Liked</p>
        </Link>

        <Link
          className="flex flex-col items-center mb-3 transition-all hover:bg-white-1 hover:bg-opacity-80 p-2 rounded-lg"
          to="/watchlater"
        >
          <div>
            <AiOutlineClockCircle className="text-3xl mb-1" />
          </div>
          <p className="font-medium text-center leading-4">
            Watch <br /> Later
          </p>
        </Link>

        <Link
          className="flex flex-col items-center mb-3 transition-all hover:bg-white-1 hover:bg-opacity-80 p-2 rounded-lg"
          to="/history"
        >
          <div>
            <AiOutlineHistory className="text-3xl" />
          </div>
          <p className="font-medium">History</p>
        </Link>

        <Link
          className="flex flex-col items-center mb-3 transition-all hover:bg-white-1 hover:bg-opacity-80 p-2 rounded-lg"
          to="/library"
        >
          <div>
            <VscLibrary className="text-3xl" />
          </div>
          <p className="font-medium">Library</p>
        </Link>
      </div>
    </div>
  );
}

export default CompactSideBar;
