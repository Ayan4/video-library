import React from "react";
import Categories from "../components/Categories";
import Banners from "../components/Banners";
import VideoCard from "../components/VideoCard";
import { useAuth } from "../context/authContext";
import Sidebar from "../components/Navbar/Sidebar";
import { useTheme } from "../context/themeContext";
import { useLocation } from "react-router-dom";

function Home() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const queryParam = useQuery().get("category");

  return (
    <div className={`flex ${theme && "bg-dark-bgr"}`}>
      <div className="w-1/5 hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5">
        {user && (
          <div className="px-5 my-5 lg:hidden">
            <h1
              className={`font-poppins font-medium mb-1.5 ${
                theme ? "text-white-1" : "text-black-1"
              } text-lg border-l-4 border-primary pl-2.5`}
            >
              Hello, {user.name}
            </h1>
          </div>
        )}
        <Categories />
        <Banners />
        <h1
          className={`font-poppins font-medium ${
            theme ? "text-white-1" : "text-black-1"
          } text-lg border-l-4 border-primary pl-2.5 mx-5 my-5`}
        >
          {queryParam ? `${queryParam} ` : "Recommended"}
        </h1>
        <VideoCard />
      </div>
    </div>
  );
}

export default Home;
