import { Box, Image, Text, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function TopNav() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"  
      alignItems="center"
      w="100%"
      p={2}
      bg="#f2f2f2"
      px={{ base: 4, md: 10 }} 
    >
      
      <HStack spacing={2}>
        <Image
          borderRadius="full"
          boxSize="25px"  
          src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739113417/k1ddlu9a4oeclq2helgo.png"
          alt="Dan Abramov"
        />
        <Text fontSize={{ base: "12px", md: "14px" }} color="#2e3337">
          KE - KSH
        </Text>
      </HStack>

     
      <Link as={RouterLink} to="/help">
        <Text
          fontSize={{ base: "12px", md: "14px" }}  
          color="#2e3337"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
        >
          Help Centre
        </Text>
      </Link>
    </Box>
  );
}

export default TopNav;
