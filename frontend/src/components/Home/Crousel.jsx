import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Image} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@chakra-ui/react";

export default function App() {
  return (
    <Box h="70vh" w="92%">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={
              "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739063670/mqdlw1ddkbjmzshsn8uz.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739128637/az7o9vdka9vu0begjtxt.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739063762/idxotnflueismnpncoip.jpg" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739063732/ulcswxildfyq7rwe2no7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739063697/pxzrdpolpkhwhi9i9t0e.jpg" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
