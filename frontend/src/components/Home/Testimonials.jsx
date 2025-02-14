import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image, IconButton, VStack, HStack, Container } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Abdikhafar Issack",
    comment:
      "I have been purchasing poultry products from Yare Farms for over a year now, and I must say the quality is unmatched! The chickens are always healthy, and the eggs are fresh. The customer service is also exceptional—they respond quickly and ensure timely deliveries. I highly recommend Yare Farms to anyone looking for reliable poultry products!",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1727702493/20190228001258_IMG_5505_hngip8.jpg",
  },
  {
    id: 2,
    name: "Jamal",
    comment:
      "Honestly, Yare Farms has completely transformed my experience with poultry farming. Their expert advice and top-quality feed have significantly improved my farm's productivity. What I love most is their honesty and commitment to delivering the best. They genuinely care about customer satisfaction!",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1727702493/20190228001258_IMG_5505_hngip8.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    comment:
      "Finding a trustworthy poultry supplier was a challenge until I discovered Yare Farms. Their organic and ethically raised chickens have made a huge difference in my restaurant’s menu. My customers love the taste, and I appreciate the transparency in their farming practices. Thank you, Yare Farms, for your dedication to quality!",
    image: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1727702493/20190228001258_IMG_5505_hngip8.jpg",
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Container maxW={{ base: "90%", md: "50%" }} py={4} px={4} textAlign="center" bg="gray.50" shadow="xl" rounded="xl">
      <Text fontSize="3xl" fontWeight="bold" mb={4} color="gray.800">
        <Text as="span" color="green.600">Customer</Text> <Text as="span" color="orange.500">Feedback</Text>
      </Text>

      <Flex align="center" justify="center" position="relative" p={6} rounded="xl">
        <IconButton
          aria-label="Previous"
          icon={<FaChevronLeft size={10} />}
          position="absolute"
          left={-8}
          top="50%"
          transform="translateY(-50%)"
          onClick={prevSlide}
          bg="white"
          boxShadow="md"
          _hover={{ bg: "gray.200" }}
        />

<VStack spacing={3} textAlign="center" maxW="lg" p={4} bg="white" shadow="lg" rounded="lg">
  <Image
    src={testimonials[currentIndex].image}
    alt={testimonials[currentIndex].name}
    boxSize="80px"
    borderRadius="full"
    objectFit="cover"
  />
  <Text fontSize="md" fontStyle="italic" color="gray.700" px={4}>
    "{testimonials[currentIndex].comment}"
  </Text>
  <Text mt={3} fontWeight="bold" color="blue.600" fontSize="lg">
    {testimonials[currentIndex].name}
  </Text>
</VStack>


        <IconButton
          aria-label="Next"
          icon={<FaChevronRight size={10} />}
          position="absolute"
          right={-8}
          top="50%"
          transform="translateY(-50%)"
          onClick={nextSlide}
          bg="white"
          boxShadow="md"
          _hover={{ bg: "gray.200" }}
        />
      </Flex>

      <HStack justify="center" mt={4} spacing={2}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={testimonial.id}
            w={2.5}
            h={2.5}
            borderRadius="full"
            bg={index === currentIndex ? "blue.600" : "gray.300"}
          />
        ))}
      </HStack>
    </Container>
  );
};

export default Testimonials;
