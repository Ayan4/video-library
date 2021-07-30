import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { AiOutlineUser } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { useTheme } from "../../context/themeContext";

function Navbar() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <nav
      style={{ zIndex: "100" }}
      className={`px-5 h-16 border-b ${
        theme ? "bg-dark-nav border-dark-bor" : "bg-white-3 border-white-1"
      } font-poppins width-screen sticky top-0 bg-white flex justify-between items-center`}
    >
      <Link className="flex items-center sm:flex-row" to="/">
        <img className="w-8 sm:w-9 mr-2 sm:mr-3" src={logo} alt="" />
        <p
          className={`${
            theme ? "text-white" : "text-black-1"
          } text-xl font-mont font-light sm:text-2xl`}
        >
          NEROVIEW
        </p>
      </Link>

      <div className="flex items-center">
        {theme ? (
          <FiSun
            onClick={() => setTheme(!theme)}
            className="text-white-1 border-2 border-white-1 rounded-lg p-1 text-3xl mr-3 cursor-pointer"
          />
        ) : (
          <BiMoon
            onClick={() => setTheme(!theme)}
            className="text-black-2 border-2 border-black-2 rounded-lg p-1 text-3xl mr-3 cursor-pointer"
          />
        )}

        {user ? (
          <Link className="relative" to="/profile">
            {!theme && (
              <div className="absolute inset-0 bg-black opacity-20 rounded-full"></div>
            )}
            <img
              className={`rounded-full w-7 h-7 lg:w-8 lg:h-8 mt-0.5 ${theme &&
                "border-none"}`}
              src="https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=6&m=1288129985&s=612x612&w=0&h=V3wDE1mcLUtlaLUi4yeEp9civuxgB4RA60JehnQdaOY="
              alt=""
            />
          </Link>
        ) : (
          <div className="flex text-sm">
            <Link className="hidden lg:block" to="/login">
              <button
                className={`flex items-center py-1.5 px-1.5 transition-all box-border border mr-2 rounded ${
                  theme
                    ? "text-white-1 border-dark-bor hover:bg-dark-bor"
                    : "text-black-2 hover:bg-white-1"
                }`}
              >
                Login
              </button>
            </Link>
            <Link className="hidden lg:block" to="/signup">
              <button className="flex items-center py-1.5 px-1.5 transition-all hover:bg-opacity-80 rounded bg-primary-red border border-primary-red text-white">
                Signup
              </button>
            </Link>
            <Link className="lg:hidden" to="/login">
              <AiOutlineUser
                className={`text-3xl border-2 rounded-full ${
                  theme
                    ? "text-white-1 border-white-1"
                    : "text-black-2 border-black-2"
                }`}
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
