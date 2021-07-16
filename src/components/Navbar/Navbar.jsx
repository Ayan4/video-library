import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { BiUser } from "react-icons/bi";

function Navbar() {
  const { logout, user } = useAuth();

  return (
    <nav className="px-5 py-4 border-b border-white-1 width-screen sticky top-0 bg-white z-10 flex justify-between align-center">
      <Link className="" to="/">
        <p className="text-black-2">VidJam</p>
      </Link>

      <Link to="/signup">
        <BiUser className="text-black-1 w-6 h-6 border-2 border-black-1 rounded-full inline-block" />
      </Link>

      {user && (
        <button className="px-4 py-2 bg-white text-black" onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
