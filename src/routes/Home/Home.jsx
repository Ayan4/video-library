import React from "react";
import Categories from "../../components/Categories";
import Banners from "../../components/Banners";
import VideoCard from "../../components/VideoCard";
import { useAuth } from "../../context/authContext";

function Home() {
  const { user } = useAuth();

  return (
    <div>
      {user && (
        <div className="px-5 my-5">
          <h1 className="font-poppins font-medium mb-1.5 text-black-1 text-lg border-l-4 border-primary pl-2.5">
            Hello, {user.name}
          </h1>
        </div>
      )}
      <Categories />
      <Banners />
      <VideoCard />
    </div>
  );
}

export default Home;
