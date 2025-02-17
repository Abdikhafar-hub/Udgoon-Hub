import { Box, Text, SimpleGrid, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import PromoBanner from "./PromoBanner"; 

const Trending = () => {
  const navigate = useNavigate(); 

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      
      <Text
        pt={{ base: "1%", md: "3%" }}  
        fontSize={{ base: "1.3rem", md: "2.2rem" }}  
        mb={{ base: 4, md: 8 }}  
        textAlign="center"
        fontWeight="bold"
        fontFamily="Playfair Display"
        fontStyle="italic"
        color="goldenrod"
        textDecoration="underline"
        textUnderlineOffset={4}  
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.1)"  
      >
        ✨ Top Brands ✨
      </Text>

      <SimpleGrid
        rowGap="10px"  
        columns={{ base: 3, sm: 4, md: 6 }}  
        spacing={2}  
        w="100%"
        px={{ base: 3, md: "60px" }}  
        textAlign="center"
      >
        {[
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739153818/sllqotc4l9rmoueuj1ua.png",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148668/rmdgeicishvxjegtlyvh.jpg",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148749/xtxwmlibcis5gee407kr.jpg",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148892/ckkczklzk5nx1jhuzhqg.png",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148971/eypvkzhd71bxe0bhzlf8.png",
          "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739149319/no8b9vy15i3d6whdupr3.png"
        ].map((src, index) => (
          <Center key={index}>
            <Box>
              <Image
                boxSize={{ base: "18vw", sm: "16vw", md: "10vw" }}  
                src={src}
              />
            </Box>
          </Center>
        ))}
      </SimpleGrid>

      <Box m={{ base: 4, md: 8 }} w="100%">  
        <PromoBanner />
      </Box>

      <Text
        pt={{ base: "1%", md: "3%" }}  
        fontSize={{ base: "1.3rem", md: "2.2rem" }}  
        textAlign="center"
        fontWeight="bold"
        fontFamily="Playfair Display"
        fontStyle="italic"
        color="goldenrod"
        textDecoration="underline"
        textUnderlineOffset={4}  
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.15)"  
      >
        🔥 Trending Offers 🔥
      </Text>

      <SimpleGrid
        w="90%"
        m="auto"
        columns={{ base: 2, sm: 2, md: 3 }}  
        spacing={{ base: 4, md: 8 }}  
        px={{ base: 3, md: "2.5%" }}
        pt="2%"
      >
        {[
          {
            src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739149483/nzd7naentvjts8lbaexv.jpg",
            title: "Lattafa Khamrah",
            description: "Get a FREE 4ml Body Spray,spend KSH 30,000 or more on Lattafa Khamrah.",
            link: "/product/12"
          },
          {
            src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144273/cxguramv8mzyh3enzn1m.jpg",
            title: "Burberry Her 100ML",
            description: "Get a FREE 10ml Spray,spend KSH 40,000 or more on Burberry Her.",
            link: "/product/38"
          },
          {
            src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739064161/uc3khepmva2bwe6z8riq.jpg",
            title: "Gucci Guilty",
            description: "Get KSH 2,000 shopping voucher when you spend KSH 20,000 or more on Gucci Guilty.",
            link: "/product/44"
          }
        ].map((offer, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            p={{ base: 2, md: 3 }}  
          >
            <Image
              borderRadius="50%"
              boxSize={{ base: "30vw", sm: "25vw", md: "18vw" }}  
              src={offer.src}
            />
            <Text fontWeight="400" fontSize={{ base: "14px", md: "18px" }} mb={2}>
              {offer.title}
            </Text>
            <Text fontWeight="100" fontSize={{ base: "12px", md: "16px" }} px={{ base: 1, md: 0 }}>
              {offer.description}
            </Text>
            <Button
              mt="auto"
              bgColor="white"
              borderRadius="0px"
              variant="outline"
              colorScheme="black"
              fontSize={{ base: "12px", md: "14px" }}  
              px={{ base: 3, md: 5 }}
              py={{ base: 2, md: 3 }}
              onClick={() => navigate(offer.link)}  
            >
              SHOP NOW
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Trending;
