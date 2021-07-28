import React from "react";
import Categories from "../components/Categories";
import Banners from "../components/Banners";
import VideoCard from "../components/VideoCard";
import { useAuth } from "../context/authContext";
import Sidebar from "../components/Navbar/Sidebar";
// import { usePlaylist } from "../context/playlistContext";

function Home() {
  const { user } = useAuth();
  // const { state } = usePlaylist();

  // console.log(state);

  return (
    <div className="flex">
      <div className="w-1/5 hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5">
        {user && (
          <div className="px-5 my-5 lg:hidden">
            <h1 className="font-poppins font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
              Hello, {user.name}
            </h1>
          </div>
        )}
        <Categories />
        <Banners />
        <h1 className="font-poppins font-medium text-black-1 text-lg border-l-4 border-primary pl-2.5 mx-5 my-5">
          Recommended
        </h1>
        <VideoCard />
      </div>
    </div>
  );
}

export default Home;
