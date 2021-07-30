import { Link } from "react-router-dom";
import {
  AiOutlineHistory,
  AiOutlineLike,
  AiOutlineClockCircle
} from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { FiHome } from "react-icons/fi";
import { useTheme } from "../../context/themeContext";

function CompactSideBar() {
  const { theme } = useTheme();

  return (
    <div
      style={{ top: "4rem" }}
      className={`border-r ${
        theme ? "bg-dark-nav border-dark-bor" : "bg-white-3 border-white-1"
      } h-screen bottom-0 sticky font-poppins w-24`}
    >
      <div
        className={`flex flex-col px-4 py-4 ${
          theme ? "text-white-2" : "text-black-2"
        }`}
      >
        <Link
          className={`flex flex-col items-center mb-3 hover:bg-opacity-80 transition-all ${
            theme ? "hover:bg-dark-bor" : "hover:bg-white-1"
          } p-2 rounded-lg`}
          to="/"
        >
          <div>
            <FiHome className="text-3xl" />
          </div>
          <p className="font-medium text-sm">Home</p>
        </Link>

        <Link
          className={`flex flex-col items-center mb-3 hover:bg-opacity-80 transition-all ${
            theme ? "hover:bg-dark-bor" : "hover:bg-white-1"
          } p-2 rounded-lg`}
          to="/likedvideos"
        >
          <div>
            <AiOutlineLike className="text-3xl" />
          </div>
          <p className="font-medium text-sm">Liked</p>
        </Link>

        <Link
          className={`flex flex-col items-center mb-3 hover:bg-opacity-80 transition-all ${
            theme ? "hover:bg-dark-bor" : "hover:bg-white-1"
          } p-2 rounded-lg`}
          to="/watchlater"
        >
          <div>
            <AiOutlineClockCircle className="text-3xl mb-1" />
          </div>
          <p className="font-medium text-sm text-center leading-4">
            Watch <br /> Later
          </p>
        </Link>

        <Link
          className={`flex flex-col items-center mb-3 hover:bg-opacity-80 transition-all ${
            theme ? "hover:bg-dark-bor" : "hover:bg-white-1"
          } p-2 rounded-lg`}
          to="/history"
        >
          <div>
            <AiOutlineHistory className="text-3xl" />
          </div>
          <p className="font-medium text-sm">History</p>
        </Link>

        <Link
          className={`flex flex-col items-center mb-3 hover:bg-opacity-80 transition-all ${
            theme ? "hover:bg-dark-bor" : "hover:bg-white-1"
          } p-2 rounded-lg`}
          to="/library"
        >
          <div>
            <VscLibrary className="text-3xl" />
          </div>
          <p className="font-medium text-sm">Library</p>
        </Link>
      </div>
    </div>
  );
}

export default CompactSideBar;
