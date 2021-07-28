import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../assets/logo.svg";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav
      style={{ zIndex: "100" }}
      className="px-5 h-16 border-b border-white-1 font-poppins width-screen sticky top-0 bg-white flex justify-between items-center"
    >
      <Link className="flex items-center sm:flex-row" to="/">
        <img className="w-8 sm:w-9 mr-2 sm:mr-3" src={logo} alt="" />
        <p className="text-black-1 text-xl font-mont font-light sm:text-2xl">
          NEROVIEW
        </p>
      </Link>
      {user ? (
        <Link to="/profile">
          <img
            className="rounded-full w-8 h-8 mt-0.5 border border-white-2"
            src="https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=6&m=1288129985&s=612x612&w=0&h=V3wDE1mcLUtlaLUi4yeEp9civuxgB4RA60JehnQdaOY="
            alt=""
          />
        </Link>
      ) : (
        <div className="flex text-sm">
          <Link className="hidden lg:block" to="/login">
            <button className="flex items-center py-1.5 px-1.5 transition-all border hover:bg-white-1 mr-2 rounded text-black-2">
              Login
            </button>
          </Link>
          <Link className="hidden lg:block" to="/signup">
            <button className="flex items-center py-1.5 px-1.5 transition-all hover:bg-opacity-80 rounded bg-primary-red text-white">
              Signup
            </button>
          </Link>
          <Link className="lg:hidden" to="/login">
            <AiOutlineUser className="text-2xl text-primary-red" />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
