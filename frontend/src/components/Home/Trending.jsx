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
        fontSize="2.2rem" 
         mb={12}
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
        columns={{ lg: 6, md: 3, sm: 1, base: 1 }}
        spacing={0}
        w="100%"
        m="auto"
        px="100px"
      >
       
        <Center>
          <Box>
            <Image
              boxSize={{ lg: "12vw", base: "50vw" }}
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739153818/sllqotc4l9rmoueuj1ua.png"
            />
          </Box>
        </Center>
        <Center>
          <Box>
            <Image
              boxSize={{ lg: "12vw", base: "50vw" }}
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148668/rmdgeicishvxjegtlyvh.jpg"
            />
          </Box>
        </Center>
        <Center>
          <Box>
            <Image
              boxSize={{ lg: "12vw", base: "50vw" }}
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148749/xtxwmlibcis5gee407kr.jpg"
            />
          </Box>
        </Center>
        <Center>
          <Box>
            <Image
              boxSize={{ lg: "12vw", base: "50vw" }}
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148892/ckkczklzk5nx1jhuzhqg.png"
            />
          </Box>
        </Center>
        <Center>
          <Box>
            <Image
              boxSize={{ lg: "12vw", base: "50vw" }}
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148971/eypvkzhd71bxe0bhzlf8.png"
            />
          </Box>
        </Center>
        <Center>
          <Box>
            <Image
              boxSize={{ lg: "12vw", base: "50vw" }}
              src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739149319/no8b9vy15i3d6whdupr3.png"
            />
          </Box>
        </Center>
      </SimpleGrid>

      <Box m={10} w="100%">
        <PromoBanner />
      </Box>

      <Text
         pt="4%" 
         fontSize="2.2rem" 
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
        columns={[1, 2, 3]}
        spacing={10}
        pl="2.5%"
        pr="2.5%"
        pt="2.5%"
      >
        
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize={["35vw", "25vw"]}
            src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739149483/nzd7naentvjts8lbaexv.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            Lattafa Khamrah
          </Text>
          <Text fontWeight="100">
            Get a FREE 4ml Body Spray (worth KSH 3,000) when you spend KSH 30,000 or more on Lattafa Khamrah.
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
            onClick={() => navigate(`/product/12`)} 
          >
            SHOP NOW
          </Button>
        </Box>

        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144273/cxguramv8mzyh3enzn1m.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            Burberry Her 100ML
          </Text>
          <Text fontWeight="100">
            Get a FREE 10ml Burberry Her Travel Spray (worth KSH 4,000) when you spend KSH 40,000 or more on Burberry Her.
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
            onClick={() => navigate(`/product/38`)} 
          >
            SHOP NOW
          </Button>
        </Box>

        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739064161/uc3khepmva2bwe6z8riq.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            Gucci Guilty
          </Text>
          <Text fontWeight="100">
            Get a KSH 2,000 shopping voucher when you spend KSH 20,000 or more on Gucci Guilty.
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
            onClick={() => navigate(`/product/44`)} 
          >
            SHOP NOW
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Trending;
