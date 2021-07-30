import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHistory,
  AiOutlineLike,
  AiOutlineClockCircle
} from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { FiHome } from "react-icons/fi";
import { useAuth } from "../../context/authContext";
import { useTheme } from "../../context/themeContext";

function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div
      style={{ top: "4rem" }}
      className={`border-r ${
        theme ? "bg-dark-nav border-dark-bor" : "border-white-1 bg-white-3"
      } h-screen sticky font-poppins`}
    >
      {user && (
        <div
          className={`flex items-start py-4 pl-5 border-b ${
            theme ? "border-dark-bor" : "border-white-1"
          }`}
        >
          <img
            className="rounded-full w-12 h-12 mt-0.5"
            src="https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=6&m=1288129985&s=612x612&w=0&h=V3wDE1mcLUtlaLUi4yeEp9civuxgB4RA60JehnQdaOY="
            alt=""
          />
          <div className="flex flex-col ml-3.5">
            <p className={`text-lg ${theme ? "text-white-1" : "text-black-1"}`}>
              Hello,
            </p>
            <div className="relative">
              <p
                className={`text-sm ${theme ? "text-white-2" : "text-gray-1"}`}
              >
                {user.name}
              </p>
              {user.isAdmin && (
                <p className="text-xs absolute top-0.5 -right-16 text-black-2 rounded border border-white-1 flex items-center px-1 bg-green-200">
                  superuser
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col px-5 py-4 text-black-2">
        <Link
          className={`flex items-center mb-3 transition-all p-2 rounded-lg ${
            theme
              ? "hover:bg-dark-bor hover:bg-opacity-80 text-white-1"
              : "hover:bg-white-1 hover:bg-opacity-80"
          } ${
            location.pathname === "/" && theme
              ? "text-primary-red bg-dark-bor bg-opacity-80"
              : location.pathname === "/" &&
                "text-primary-red bg-white-1 bg-opacity-80"
          }`}
          to="/"
        >
          <div>
            <FiHome className="text-3xl" />
          </div>
          <p className="font-medium ml-6">Home</p>
        </Link>

        <Link
          className={`flex items-center mb-3 transition-all p-2 rounded-lg ${
            theme
              ? "hover:bg-dark-bor hover:bg-opacity-80 text-white-1"
              : "hover:bg-white-1 hover:bg-opacity-80"
          } ${
            location.pathname === "/likedvideos" && theme
              ? "text-primary-red bg-dark-bor bg-opacity-80"
              : location.pathname === "/likedvideos" &&
                "text-primary-red bg-white-1 bg-opacity-80"
          }`}
          to="/likedvideos"
        >
          <div>
            <AiOutlineLike className="text-3xl" />
          </div>
          <p className="font-medium ml-6">Liked</p>
        </Link>

        <Link
          className={`flex items-center mb-3 transition-all p-2 rounded-lg ${
            theme
              ? "hover:bg-dark-bor hover:bg-opacity-80 text-white-1"
              : "hover:bg-white-1 hover:bg-opacity-80"
          } ${
            location.pathname === "/watchlater" && theme
              ? "text-primary-red bg-dark-bor bg-opacity-80"
              : location.pathname === "/watchlater" &&
                "text-primary-red bg-white-1 bg-opacity-80"
          }`}
          to="/watchlater"
        >
          <div>
            <AiOutlineClockCircle className="text-3xl" />
          </div>
          <p className="font-medium text-left ml-6">Watch Later</p>
        </Link>

        <Link
          className={`flex items-center mb-3 transition-all p-2 rounded-lg ${
            theme
              ? "hover:bg-dark-bor hover:bg-opacity-80 text-white-1"
              : "hover:bg-white-1 hover:bg-opacity-80"
          } ${
            location.pathname === "/history" && theme
              ? "text-primary-red bg-dark-bor bg-opacity-80"
              : location.pathname === "/history" &&
                "text-primary-red bg-white-1 bg-opacity-80"
          }`}
          to="/history"
        >
          <div>
            <AiOutlineHistory className="text-3xl" />
          </div>
          <p className="font-medium ml-6">History</p>
        </Link>

        <Link
          className={`flex items-center mb-3 transition-all p-2 rounded-lg ${
            theme
              ? "hover:bg-dark-bor hover:bg-opacity-80 text-white-1"
              : "hover:bg-white-1 hover:bg-opacity-80"
          } ${
            location.pathname === "/library" && theme
              ? "text-primary-red bg-dark-bor bg-opacity-80"
              : location.pathname === "/library" &&
                "text-primary-red bg-white-1 bg-opacity-80"
          }`}
          to="/library"
        >
          <div>
            <VscLibrary className="text-3xl" />
          </div>
          <p className="font-medium ml-6">Library</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
