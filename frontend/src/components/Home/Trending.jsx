import { Box, Text, SimpleGrid, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import PromoBanner from "./PromoBanner"; 

const Trending = () => {
  const navigate = useNavigate(); 

  return (
    <Box
      alignSelf="normal"
      display={{ lg: "flex" }}
      flexDirection="column"
      alignItems="center"
    >
      <Text
        pt="4%" 
        fontSize={{ base: "1.8rem", md: "2.2rem" }} // ✅ Adjust font size for mobile
        mb={10}
        textAlign="center"
        fontWeight="bold"
        fontFamily="Playfair Display"
        fontStyle="italic"
        color="goldenrod"
        textDecoration="underline"
        textUnderlineOffset={8} 
        textShadow="1px 1px 8px rgba(0, 0, 0, 0.1)" 
      >
       ✨ Top Brands ✨
      </Text>

      <SimpleGrid
        rowGap="20px"
        columns={{ base: 2, sm: 3, md: 6 }} // ✅ 2 per row on mobile, 6 on desktop
        spacing={4}
        w="100%"
        px={{ base: 6, md: "100px" }} // ✅ Smaller padding on mobile
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
                boxSize={{ base: "30vw", sm: "25vw", lg: "12vw" }} // ✅ Adjust image size for mobile
                src={src}
              />
            </Box>
          </Center>
        ))}
      </SimpleGrid>

      <Box m={10} w="100%">
        <PromoBanner />
      </Box>

      <Text
        pt="4%" 
        fontSize={{ base: "1.8rem", md: "2.2rem" }} 
        textAlign="center"
        fontWeight="bold"
        fontFamily="Playfair Display"
        fontStyle="italic"
        color="goldenrod"
        textDecoration="underline"
        textUnderlineOffset={10} 
        textShadow="1px 1px 10px rgba(0, 0, 0, 0.15)" 
      >
       🔥 Trending Offers 🔥
      </Text>

      <SimpleGrid
        w="90%"
        m="auto"
        columns={{ base: 1, sm: 2, md: 3 }} // ✅ 1 column on mobile, 2 on tablets, 3 on desktop
        spacing={10}
        px={{ base: 4, md: "2.5%" }}
        pt="2.5%"
      >
        {[
          {
            src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739149483/nzd7naentvjts8lbaexv.jpg",
            title: "Lattafa Khamrah",
            description: "Get a FREE 4ml Body Spray (worth KSH 3,000) when you spend KSH 30,000 or more on Lattafa Khamrah.",
            link: "/product/12"
          },
          {
            src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144273/cxguramv8mzyh3enzn1m.jpg",
            title: "Burberry Her 100ML",
            description: "Get a FREE 10ml Burberry Her Travel Spray (worth KSH 4,000) when you spend KSH 40,000 or more on Burberry Her.",
            link: "/product/38"
          },
          {
            src: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739064161/uc3khepmva2bwe6z8riq.jpg",
            title: "Gucci Guilty",
            description: "Get a KSH 2,000 shopping voucher when you spend KSH 20,000 or more on Gucci Guilty.",
            link: "/product/44"
          }
        ].map((offer, index) => (
          <Box
            key={index}
            alignSelf="normal"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Image
              borderRadius="50%"
              boxSize={{ base: "45vw", sm: "30vw", md: "25vw" }} // ✅ Adjust size for mobile
              src={offer.src}
            />
            <Text fontWeight="400" fontSize={{ base: "18px", md: "20px" }} mb={3}>
              {offer.title}
            </Text>
            <Text fontWeight="100" fontSize={{ base: "14px", md: "16px" }} px={{ base: 2, md: 0 }}>
              {offer.description}
            </Text>
            <Button
              mt="auto"
              bgColor="white"
              borderRadius="0px"
              variant="outline"
              colorScheme="black"
              fontSize={{ base: "14px", md: "16px" }} // ✅ Adjust button text size
              px={{ base: 4, md: 6 }}
              py={{ base: 2, md: 4 }}
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
