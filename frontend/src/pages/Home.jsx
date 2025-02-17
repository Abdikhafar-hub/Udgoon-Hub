import { Box, Flex, Text,Image } from "@chakra-ui/react";
import Crousel from "../components/Home/Crousel";
import AboutUs from "../components/Home/AboutUs";
import Trending from "../components/Home/Trending";
import CardSlide from "./Products";
import Middle from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact"

export default function Home() {
  return (
    <Flex justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
      <Box
        bg={"black"}
        w={"92%"}
        h={"40px"}
        color={"white"}
        textAlign={"center"}
        py="8px"
        fontSize={"12px"}
        m={3}
        _hover={{ bg: "white", color: "black" }}
      >
        {" "}
        <Text 
  fontSize={{ base: "14px", md: "18px" }} 
  fontWeight="bold"
  textAlign="center"
  px={{ base: 2, md: 0 }} 
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


