import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

function Navbar() {
  return (
    <nav
      style={{ zIndex: "100" }}
      className="px-5 py-4 border-b border-white-1 width-screen sticky top-0 bg-white flex justify-between align-center"
    >
      <Link className="" to="/">
        <p className="text-black-2">VidJam</p>
      </Link>

      <Link to="/signup">
        <BiUser className="text-black-1 w-6 h-6 border-2 border-black-1 rounded-full inline-block" />
      </Link>
    </nav>
  );
}

export default Navbar;
