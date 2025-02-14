import { Box, Image, Text } from "@chakra-ui/react";

function TopNav() {
  return (
    <Box
      display="flex"
      justifyContent="end"
      w={"100%"}
      p={0}
      bg={"#f2f2f2"}
    >
      <Image
        borderRadius="50%"
        boxSize="30px"
        src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739113417/k1ddlu9a4oeclq2helgo.png"
        alt="Dan Abramov"
    
        p={2}
      />
      <Text fontSize={"14px"} p={2} color={"#2e3337"} px={2} py={1} mr={10}>
        KE - KSH
      </Text>

      <Text fontSize={"14px"} p={2} color={"#2e3337"} px={2} py={1} mr={200}>
        Help
      </Text>
    </Box>
  );
}

export default TopNav;
