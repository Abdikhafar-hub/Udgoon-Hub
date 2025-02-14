import { Box, Flex, Text,Image } from "@chakra-ui/react";
import Crousel from "../components/Home/Crousel";
import Trending from "../components/Home/Trending";
import CardSlide from "../components/Home/Products";
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
        <Text fontSize={"18px"} fontWeight={"bold"}>
        Get 15% off select products, plus 2 free gifts on orders over KSh 5,000!{" "}
        </Text>
      </Box>
      <Crousel />
      <Trending />
     
      <CardSlide />
      <Middle />
      <Contact />
    </Flex>
  );
}
