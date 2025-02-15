import { Box, Flex, Text, Button, Image, VStack } from "@chakra-ui/react";

const PromoBanner = () => {
  return (
    <Box 
      w="100%" 
      bg="#F8F6F4"  
      py={15}  
      px={5}
      display="flex" 
      justifyContent="center"
    >
      <Flex 
        w="90%"
        maxW="1400px"
        align="center"
        justify="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        
        <VStack align="flex-start" spacing={2} maxW="45%">
          <Text fontSize="42px" fontWeight="500" fontStyle="italic" fontFamily="Georgia, serif" color="#222">
            Limited-Time Offer
          </Text>
          <Text fontSize="44px" fontWeight="bold" textTransform="uppercase" color="#222">
            EXCLUSIVE PERFUME DEALS
          </Text>
          <Text fontSize="18px" color="#222" lineHeight="1.6" fontWeight="400">
            Elevate your fragrance collection with our <strong>luxury perfume sale.</strong> <br />
            Get up to <strong>50% OFF</strong> on top brands like <strong>Versace, Dior, YSL, and more!</strong>
          </Text>
          <Button 
            bg="black" 
            color="white" 
            _hover={{ bg: "gray.700" }} 
            px={6} py={4} 
            fontSize="16px"
            fontWeight="bold"
            borderRadius="0"
          >
            SHOP NOW
          </Button>
        </VStack>

        
        <Box 
          bg="black"
          color="white"
          borderRadius="full"
          textAlign="center"
          w="160px"  
          h="160px"  
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontSize="lg"
          fontWeight="bold"
          mx={8}  
          letterSpacing="0.5px"
        >
          <Text fontSize="16px" color="#E5C99F" fontFamily="Georgia, serif">Save Up To</Text>
          <Text fontSize="34px" fontWeight="bold">50%</Text>
          <Text fontSize="16px" color="#E5C99F" fontFamily="Georgia, serif">LIMITED TIME</Text>
        </Box>

       
        <Image 
          src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148285/fibdjbnwt8vyiauyow18.jpg"  
          maxW="450px"  
          borderRadius="10px"
          objectFit="cover"
          boxShadow="lg"
        />
      </Flex>
    </Box>
  );
};

export default PromoBanner;
