import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/free-mode";
import FloodAlertCard from "./FloodAlertCard";
import { FloodAlertData } from "@/data/FloodAlertData";

export default function RightBar({ rightBarStatus }) {
  return (
    <div
      className={`${
        rightBarStatus ? "w-[350px]" : "hidden w-0"
      } transition-all duration-200 bg-white-100/50 h-[calc(100vh-134px)] z-10 shadow-[-5px_10px_5px] shadow-[#12121210]`}
    >
      <h1 className="font-semibold px-4 pt-4">Flood Alert </h1>

      <div className="text-white-100 mt-[10px]">
        <Swiper
          direction={"vertical"}
          slidesPerView={5}
          loop={true}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper h-[calc(100vh-200px)]"
        >
          {FloodAlertData.map((floodData, i) => {
              return (
                <SwiperSlide key={i}>
                  <FloodAlertCard details={floodData} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
