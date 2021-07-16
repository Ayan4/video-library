import React from "react";
import { Link } from "react-router-dom";
import { MdPlaylistAdd } from "react-icons/md";

function Banners() {
  return (
    <div className="mt-5">
      <div className="pb-5 px-5 border-b border-white-1">
        <Link to="/">
          <div className="w-full py-14 bg-white-2 rounded-xl">
            <p className="text-white">This will be the carousel</p>
          </div>
        </Link>

        <Link to="/library">
          <div className="w-full mt-5 py-14 bg-playlist-banner -z-2 flex items-center justify-center relative bg-cover bg-center rounded-xl">
            <div className="bg-black opacity-60 -z-1 absolute inset-0 rounded-xl"></div>
            <MdPlaylistAdd className="w-8 h-8 text-white" />
            <p className="text-white text-xl font-poppins font-medium">
              Playlist
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banners;
