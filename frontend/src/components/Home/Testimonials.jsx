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
      mx="auto" 
      bg="white" 
      boxShadow="lg" 
      borderRadius="lg" 
      p={6}
      position="relative"
      textAlign="center"
    >
      {/* Heading */}
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
      <Text as="span" color="blackAlpha.800">Love at First Scent:</Text>{" "}
      <Text as="span" color="blackAlpha.900">Our Customer`s Thoughts</Text>
      </Text>

      {/* Navigation Buttons */}
      <Flex align="center" justify="space-between" position="relative">
        <IconButton
          aria-label="Previous testimonial"
          icon={<FaChevronLeft size={24} />}
          onClick={prevSlide}
          bg="gray.200"
          borderRadius="full"
          position="absolute"
          left={0}
          zIndex={10}
          _hover={{ bg: "gray.300" }}
        />

        {/* Testimonial Content */}
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
                boxSize="60px" 
                borderRadius="full" 
                mx="auto"
                border="2px solid" 
                borderColor="gray.300"
                mb={2}
              />
              <Text fontStyle="italic" color="gray.700" px={4}>
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
          icon={<FaChevronRight size={24} />}
          onClick={nextSlide}
          bg="gray.200"
          borderRadius="full"
          position="absolute"
          right={0}
          zIndex={10}
          _hover={{ bg: "gray.300" }}
        />
      </Flex>

      {/* Dots for navigation */}
      <Flex justify="center" mt={4}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            w="8px"
            h="8px"
            mx="2px"
            borderRadius="full"
            bg={index === currentIndex ? "blue.500" : "gray.300"}
            transition="background 0.3s"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
