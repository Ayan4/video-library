import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHistory,
  AiOutlineLike,
  AiOutlineClockCircle
} from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { FiHome } from "react-icons/fi";

function NavbarBottom() {
  return (
    <div className="py-1 px-5 font-poppins flex justify-between text-black-2 sticky bottom-0 z-20 w-full border-t border-white-1 bg-white flex">
      <Link
        className="px-1 flex flex-col justify-center items-center"
        to="/history"
      >
        <div>
          <FiHome className="text-3xl text-primary-red" />
        </div>
        <p className="font-semibold text-xs">Home</p>
      </Link>
      <Link
        className="px-1 flex flex-col justify-center items-center"
        to="/history"
      >
        <div>
          <AiOutlineHistory className="text-3xl" />
        </div>
        <p className="font-semibold text-xs">History</p>
      </Link>
      <Link
        className="px-1 flex flex-col justify-center items-center"
        to="/library"
      >
        <div>
          <VscLibrary className="text-3xl" />
        </div>
        <p className="font-semibold text-xs">Library</p>
      </Link>
      <Link
        className="px-1 flex flex-col justify-center items-center"
        to="/history"
      >
        <div>
          <AiOutlineLike className="text-3xl" />
        </div>
        <p className="font-semibold text-xs">Liked</p>
      </Link>
      <Link
        className="px-1 flex flex-col justify-center items-center"
        to="/history"
      >
        <div className="mt-2">
          <AiOutlineClockCircle className="text-3xl" />
        </div>
        <p className="font-semibold text-center leading-3 text-xs">
          Watch <br /> Later
        </p>
      </Link>
    </div>
  );
}

export default NavbarBottom;
