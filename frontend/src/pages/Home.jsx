import { Box, Flex, Text } from "@chakra-ui/react";
import Crousel from "../components/Home/Crousel";
import AboutUs from "../components/Home/AboutUs";
import Trending from "../components/Home/Trending";
import CardSlide from "./Products";
import Middle from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact";

export default function Home() {
  return (
    <Flex justifyContent="center" flexDir="column" alignItems="center">
      <Box
        bg="black"
        w="92%"
        minH="40px"
        color="white"
        textAlign="center"
        py={{ base: "6px", md: "8px" }}
        fontSize={{ base: "12px", md: "14px" }}
        m={3}
        _hover={{ bg: "white", color: "black" }}
      >
        <Text 
          fontSize={{ base: "12px", sm: "14px", md: "16px" }} 
          fontWeight="bold"
          textAlign="center"
          px={{ base: 2, md: 4 }}
        >
          Get 15% off select products, plus 2 free gifts on orders over KSh 10,000!
        </Text>
      </Box>

      <Crousel />
      <AboutUs />
      <Trending />
      <CardSlide />
      <Middle />
      <Contact />
    </Flex>
  );
}
