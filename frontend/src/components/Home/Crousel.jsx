import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function App() {
  return (
    <Box w={{ base: "90%", md: "100vw" }} maxW="100%" mx="auto">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {[
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739063670/mqdlw1ddkbjmzshsn8uz.jpg",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739128637/az7o9vdka9vu0begjtxt.jpg",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739063762/idxotnflueismnpncoip.jpg",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739063732/ulcswxildfyq7rwe2no7.jpg",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739063697/pxzrdpolpkhwhi9i9t0e.jpg",
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              w="100%" // ✅ Full width on both desktop and mobile
              h={{ base: "40vh", md: "70vh" }} // ✅ Smaller height on mobile, full height on desktop
              objectFit="cover" // ✅ Ensures proper scaling
              borderRadius="10px" // ✅ Optional rounded corners
              alt={`Perfume Promotion ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
