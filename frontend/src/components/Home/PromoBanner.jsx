import { Box, Flex, Text, Button, Image, VStack } from "@chakra-ui/react";

const PromoBanner = () => {
  return (
    <Box 
      w="100%" 
      bg="#F8F6F4"  
      py={{ base: 2, md: 10 }}  
      px={{ base: 2, md: 4 }}
      display="flex" 
      justifyContent="center"
    >
      <Flex 
        w="90%"
        maxW="900px"
        align="center"
        justify="space-between"
        flexDirection={{ base: "column", md: "row" }}  
        textAlign={{ base: "center", md: "left" }} 
      >
        
        <VStack align={{ base: "center", md: "flex-start" }} spacing={{ base: 1, md: 3 }} maxW={{ base: "100%", md: "45%" }}>
          <Text 
            fontSize={{ base: "16px", md: "32px" }}  
            fontWeight="500" 
            fontStyle="italic" 
            fontFamily="Georgia, serif" 
            color="#222"
          >
            Limited-Time Offer
          </Text>
          <Text 
            fontSize={{ base: "18px", md: "34px" }}  
            fontWeight="bold" 
            textTransform="uppercase" 
            color="#222"
          >
            EXCLUSIVE PERFUME DEALS
          </Text>
          <Text 
            fontSize={{ base: "11px", md: "15px" }}  
            color="#222" 
            lineHeight="1.3" 
            fontWeight="400"
          >
            Elevate your fragrance collection with our <strong>luxury perfume sale.</strong> <br />
            Get up to <strong>50% OFF</strong> on top brands like <strong>Versace, Dior, YSL, and more!</strong>
          </Text>
          <Button 
            bg="black" 
            color="white" 
            _hover={{ bg: "gray.700" }} 
            px={{ base: 2, md: 5 }}  
            py={{ base: 1, md: 3 }}
            fontSize={{ base: "11px", md: "14px" }}  
            fontWeight="bold"
            borderRadius="0"
            mt={1}  
          >
            SHOP NOW
          </Button>
        </VStack>

        
        <Box 
          bg="black"
          color="white"
          borderRadius="full"
          textAlign="center"
          w={{ base: "75px", md: "120px" }}  
          h={{ base: "75px", md: "120px" }}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontSize="sm"
          fontWeight="bold"
          mx={{ base: 0, md: 5 }}  
          my={{ base: 2, md: 0 }}  
          letterSpacing="0.5px"
        >
          <Text fontSize="9px" color="#E5C99F" fontFamily="Georgia, serif">Save Up To</Text>
          <Text fontSize="18px" fontWeight="bold">50%</Text>  
          <Text fontSize="9px" color="#E5C99F" fontFamily="Georgia, serif">LIMITED TIME</Text>
        </Box>

       
        <Image 
          src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148285/fibdjbnwt8vyiauyow18.jpg"  
          w={{ base: "80%", md: "320px" }}  
          maxW="320px" 
          mx="auto" 
          borderRadius="8px"
          objectFit="cover"
          boxShadow="md"
        />
      </Flex>
    </Box>
  );
};

export default PromoBanner;
