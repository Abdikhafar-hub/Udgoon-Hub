import React, { useState, useEffect } from "react";
import { Box, Text, Button, Flex, Image, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Abdikhafar Issack",
    comment: "Udgoon Hub has the most exquisite collection of perfumes! I purchased 'Swiss Arabian Shaghaf Oud' and was blown away by its long-lasting fragrance. The quality and authenticity of their perfumes are unmatched. Highly recommend to anyone looking for luxury scents at great prices!",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739688390/j7talvvxxdn2pajxtnix.jpg",
  },
  {
    id: 2,
    name: "Jamac Abdirashid",
    comment: "I have always struggled to find original designer perfumes until I came across Udgoon Hub. Their collection is amazing! I bought 'Dior Sauvage' and it’s simply incredible. The scent lasts all day, and their customer service is top-notch. Definitely coming back for more!",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739688594/nlzrykaiknlxhjlsjzsl.jpg",
  },
  {
    id: 3,
    name: "Nasra Issack",
    comment: "Finding the perfect perfume for special occasions was a hassle until I discovered Udgoon Hub. I purchased 'Yves Saint Laurent Mon Paris' and I’m absolutely in love with the scent! Their perfumes are authentic and last the entire day. Highly recommended!",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739688940/ycnqn9wag1iflpia6jia.jpg",
  },
  {
    id: 4,
    name: "Yasmin Mohamed",
    comment: "Udgoon Hub is my go-to store for premium fragrances. The selection is diverse, and they always have the latest collections. My recent purchase of 'Gucci Bloom' was a fantastic choice—rich, floral, and long-lasting. Amazing service and fast delivery too!",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739689135/p7b5c2upmxe7iv50pd1n.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    comment: "Shopping for perfumes online was never this easy! Udgoon Hub provides detailed descriptions and recommendations that helped me pick 'Tom Ford Oud Wood.' The fragrance is strong yet elegant, perfect for both casual and formal wear. Excellent service and fast shipping!",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739688760/ttm0nqfjkbgsb4ggis5c.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box 
      maxW="4xl" 
      w={{ base: "95%", md: "4xl" }} 
      mx="auto" 
      bg="white" 
      boxShadow="lg" 
      borderRadius="lg" 
      p={{ base: 4, md: 6 }} 
      position="relative"
      textAlign="center"
    >
      
      <Text 
        fontSize={{ base: "1.6rem", md: "2.1rem" }} 
        fontWeight="bold" 
        mb={6} 
        textAlign="center"
        fontFamily="'Playfair Display', serif"
      >
        <Text 
          as="span" 
          color="goldenrod" 
          fontFamily="'Playfair Display', serif" 
          textShadow="1px 1px 6px rgba(0, 0, 0, 0.15)"
          fontSize={{ base: "1.5rem", md: "2.1rem" }} 
        >
          🌸 Love at First Scent:
        </Text>{" "}
        <Text 
          as="span" 
          color="blackAlpha.900" 
          fontFamily="'Merriweather', serif" 
          fontSize={{ base: "1.5rem", md: "2.1rem" }} 
        >
          Our Customers' Thoughts 💖
        </Text>
      </Text>

      
      <Flex align="center" justify="space-between" position="relative">
        
        <IconButton
          aria-label="Previous testimonial"
          icon={<FaChevronLeft size={20} />} 
          onClick={prevSlide}
          bg="gray.200"
          borderRadius="full"
          position="absolute"
          left={{ base: "-10px", md: "-40px" }} 
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          _hover={{ bg: "gray.300" }}
        />

        
        <Box w="100%" overflow="hidden">
          {testimonials.map((testimonial, index) => (
            <Box 
              key={testimonial.id} 
              display={index === currentIndex ? "block" : "none"} 
              transition="opacity 0.5s ease-in-out"
            >
              <Text fontSize="4xl" color="gray.300">“</Text>
              <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                boxSize={{ base: "50px", md: "60px" }}
                borderRadius="full" 
                mx="auto"
                border="2px solid" 
                borderColor="gray.300"
                mb={2}
              />
              <Text 
                fontStyle="italic" 
                color="gray.700" 
                px={{ base: 2, md: 4 }} 
                fontSize={{ base: "0.9rem", md: "1rem" }} 
              >
                {testimonial.comment}
              </Text>
              <Text mt={4} fontWeight="bold" color="blue.600">
                {testimonial.name}
              </Text>
            </Box>
          ))}
        </Box>

        
        <IconButton
          aria-label="Next testimonial"
          icon={<FaChevronRight size={20} />} 
          onClick={nextSlide}
          bg="gray.200"
          borderRadius="full"
          position="absolute"
          right={{ base: "-10px", md: "-40px" }} 
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          _hover={{ bg: "gray.300" }}
        />
      </Flex>
    </Box>
  );
};

export default Testimonials;
