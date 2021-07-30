import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useTheme } from "../context/themeContext";
import { useVideo } from "../context/videosContext";

function Categories() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const { videoState } = useVideo();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const queryParam = useQuery().get("category");

  return (
    <div
      style={{ zIndex: "100", top: "4rem", minWidth: "50px" }}
      className={`border-b flex sticky overflow-auto lg:border-t-0 ${
        theme ? "bg-dark-nav border-dark-bor" : "bg-white border-white-1"
      } py-3 px-5 lg:py-4 ${
        user && theme
          ? "border-t border-dark-bor"
          : user
          ? "border-t border-white-1"
          : "border-t-0"
      }`}
    >
      <Link className="mr-2" to="/">
        <p
          className={`text-sm ${
            theme && !queryParam
              ? "bg-white-1 text-black"
              : theme
              ? "bg-dark-bor text-white-1 hover:bg-opacity-70"
              : "bg-white-1 text-black-2 hover:bg-white-2"
          } py-1 lg:py-1.5 px-4 lg:px-4 rounded-xl font-poppins inline-block`}
        >
          All
        </p>
      </Link>

      {videoState.category?.map(item => {
        return (
          <Link
            key={item._id}
            className="mr-2 min-w-max"
            to={`?category=${item.category}`}
          >
            <p
              className={`text-sm transition-all 
              ${
                theme && queryParam === item.category
                  ? "bg-white-1 text-black"
                  : theme
                  ? "bg-dark-bor text-white-1 hover:bg-opacity-70"
                  : "bg-white-1 text-black-2 hover:bg-white-2"
              }
              py-1 lg:py-1.5 px-4 rounded-xl font-poppins inline-block`}
            >
              {item.category}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;
