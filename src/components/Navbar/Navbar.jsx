import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="border border-black px-8 py-4 text-right width-screen sticky top-0 bg-black text-white z-10">
      <Link className="px-4" to="/">
        Videos
      </Link>
      <Link className="px-4" to="/login">
        login
      </Link>
      <Link className="px-4" to="/signup">
        signup
      </Link>
      <button className="px-4 py-2 bg-white text-black" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
