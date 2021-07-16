import React from "react";
import Categories from "../../components/Categories/Categories";
import Banners from "../../components/Banners/Banners";
import VideoCard from "../../components/VideoCard/VideoCard";

function Home() {
  return (
    <div>
      <Categories />
      <Banners />
      <VideoCard />
    </div>
  );
}

export default Home;
