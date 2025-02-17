import { Box, Flex, Text, Button, Image, VStack } from "@chakra-ui/react";

const PromoBanner = () => {
  return (
    <Box 
      w="100%" 
      bg="#F8F6F4"  
      py={{ base: 5, md: 15 }}  // ✅ Reduce height for mobile
      px={{ base: 3, md: 5 }}
      display="flex" 
      justifyContent="center"
    >
      <Flex 
        w="90%"
        maxW="1100px"
        align="center"
        justify="space-between"
        flexDirection={{ base: "column", md: "row" }} // ✅ Stack on mobile, row on desktop
        textAlign={{ base: "center", md: "left" }}  // ✅ Center text on mobile
      >
        
        <VStack align={{ base: "center", md: "flex-start" }} spacing={3} maxW={{ base: "100%", md: "45%" }}>
          <Text 
            fontSize={{ base: "20px", md: "38px" }}  // ✅ Reduce text size on mobile
            fontWeight="500" 
            fontStyle="italic" 
            fontFamily="Georgia, serif" 
            color="#222"
          >
            Limited-Time Offer
          </Text>
          <Text 
            fontSize={{ base: "22px", md: "40px" }}  // ✅ Reduce heading size on mobile
            fontWeight="bold" 
            textTransform="uppercase" 
            color="#222"
          >
            EXCLUSIVE PERFUME DEALS
          </Text>
          <Text 
            fontSize={{ base: "13px", md: "18px" }}  // ✅ Reduce body text
            color="#222" 
            lineHeight="1.5" 
            fontWeight="400"
          >
            Elevate your fragrance collection with our <strong>luxury perfume sale.</strong> <br />
            Get up to <strong>50% OFF</strong> on top brands like <strong>Versace, Dior, YSL, and more!</strong>
          </Text>
          <Button 
            bg="black" 
            color="white" 
            _hover={{ bg: "gray.700" }} 
            px={{ base: 3, md: 6 }}  // ✅ Reduce button padding
            py={{ base: 2, md: 4 }}
            fontSize={{ base: "13px", md: "16px" }} // ✅ Reduce button text size
            fontWeight="bold"
            borderRadius="0"
            mt={2}
          >
            SHOP NOW
          </Button>
        </VStack>

        
        <Box 
          bg="black"
          color="white"
          borderRadius="full"
          textAlign="center"
          w={{ base: "90px", md: "140px" }} // ✅ Reduce width for mobile
          h={{ base: "90px", md: "140px" }}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          fontSize="md"
          fontWeight="bold"
          mx={{ base: 0, md: 8 }}  // ✅ Remove margin on mobile
          my={{ base: 4, md: 0 }}  // ✅ Add spacing on mobile
          letterSpacing="0.5px"
        >
          <Text fontSize="11px" color="#E5C99F" fontFamily="Georgia, serif">Save Up To</Text>
          <Text fontSize="22px" fontWeight="bold">50%</Text>  
          <Text fontSize="11px" color="#E5C99F" fontFamily="Georgia, serif">LIMITED TIME</Text>
        </Box>

       
        <Image 
          src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739148285/fibdjbnwt8vyiauyow18.jpg"  
          w={{ base: "90%", md: "380px" }} // ✅ Reduce width for mobile
          maxW="380px" 
          mx="auto" 
          borderRadius="8px"
          objectFit="cover"
          boxShadow="lg"
        />
      </Flex>
    </Box>
  );
};

export default PromoBanner;
