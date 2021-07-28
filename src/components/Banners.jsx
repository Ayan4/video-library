import React from "react";
import { Link } from "react-router-dom";
import { MdPlaylistAdd } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Banners() {
  return (
    <div className="mt-5">
      <div className="pb-5 px-5 border-b border-white-1 w-full md:flex">
        <div className="md:w-1/2 md:mr-2">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="rounded-xl relative">
                <div
                  onClick={() => console.log("killa")}
                  className="absolute inset-0 rounded-xl cursor-pointer bg-black bg-opacity-50"
                >
                  <p className="text-white font-poppins text-lg">
                    The day will come when i will be on top
                  </p>
                </div>
                <img
                  className="rounded-xl h-52 lg:h-64 w-full"
                  src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl relative">
                <div
                  onClick={() => console.log("killa")}
                  className="absolute inset-0 rounded-xl cursor-pointer bg-black bg-opacity-50"
                >
                  <p className="text-white font-poppins text-lg">
                    The day will come when i will be on top
                  </p>
                </div>
                <img
                  className="rounded-xl h-52 lg:h-64 w-full"
                  src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl relative">
                <div
                  onClick={() => console.log("killa")}
                  className="absolute inset-0 rounded-xl cursor-pointer bg-black bg-opacity-50"
                >
                  <p className="text-white font-poppins text-lg">
                    The day will come when i will be on top
                  </p>
                </div>
                <img
                  className="rounded-xl h-52 lg:h-64 w-full"
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl relative">
                <div
                  onClick={() => console.log("killa")}
                  className="absolute inset-0 rounded-xl cursor-pointer bg-black bg-opacity-50"
                >
                  <p className="text-white font-poppins text-lg">
                    The day will come when i will be on top
                  </p>
                </div>
                <img
                  className="rounded-xl h-52 lg:h-64 w-full"
                  src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="md:w-1/2 md:ml-2">
          <Link to="/library">
            <div className="mt-5 md:mt-0 md:h-full py-14 bg-playlist-banner -z-2 flex items-center justify-center relative bg-cover bg-center rounded-xl">
              <div className="bg-black opacity-60 -z-1 absolute inset-0 rounded-xl"></div>
              <MdPlaylistAdd className="w-8 h-8 text-white" />
              <p className="text-white text-xl font-poppins font-medium">
                Playlist
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banners;
