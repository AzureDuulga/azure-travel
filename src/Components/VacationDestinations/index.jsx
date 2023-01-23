import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CountryList from "./CountryList";

const VacDestinition = () => {
  return (
    <Swiper
      spaceBetween={120}
      zIndex={10}
      slidesPerView={4}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation]}
      onSlideChange={() => console.log("slide change")}
    >
      <CountryList />
    </Swiper>
  );
};

export default VacDestinition;
