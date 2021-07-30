import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiPlayListAddFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { RiCompass2Line } from "react-icons/ri";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useTheme } from "../context/themeContext";
import { useVideo } from "../context/videosContext";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

function Banners() {
  const { theme } = useTheme();
  const { videoState } = useVideo();
  const navigate = useNavigate();

  const handleCategory = category => {
    navigate(`?category=${category}`);
  };

  return (
    <div className="mt-5">
      <div
        className={`pb-5 px-5 w-full border-b ${
          theme ? "border-dark-bor" : "border-white-1"
        } md:flex`}
      >
        <div className="md:w-1/2 md:mr-2">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay
            pagination={{ clickable: true }}
          >
            {videoState.category?.map(item => {
              return (
                <SwiperSlide key={item._id}>
                  <div className="rounded-xl relative">
                    <div
                      onClick={() => handleCategory(item.category)}
                      className={`absolute inset-0 rounded-xl cursor-pointer bg-black ${
                        theme ? "bg-opacity-50" : "bg-opacity-50"
                      }`}
                    >
                      <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-white font-mont text-4xl flex items-center">
                        <RiCompass2Line className="mr-1.5" />
                        <p className="">{item.category}</p>
                      </div>
                    </div>
                    <img
                      className="rounded-xl h-52 lg:h-64 w-full"
                      src={item.categoryImage}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="md:w-1/2 md:ml-2">
          <Link to="/library">
            <div className="mt-5 md:mt-0 md:h-full py-20 bg-playlist-banner flex items-center justify-center relative bg-cover bg-center rounded-xl">
              <div
                className={`bg-black ${
                  theme ? "opacity-50" : "opacity-60"
                } absolute inset-0 rounded-xl`}
              ></div>
              <div className="absolute flex items-center">
                <RiPlayListAddFill className="text-3xl text-white-1 mr-2" />
                <p className="text-white text-4xl font-mont">Playlists</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banners;
