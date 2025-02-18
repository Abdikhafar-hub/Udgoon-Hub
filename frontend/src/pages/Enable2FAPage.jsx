import { Box, Heading, Button } from "@chakra-ui/react";
import axios from "axios";

const Enable2FAPage = () => {
  const enable2FA = async () => {
    try {
      await axios.post("/api/user/security/enable-2fa", {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      alert("2FA enabled successfully!");
    } catch (error) {
      console.error("Error enabling 2FA", error);
    }
  };

  return (
    <Box w="90%" m="auto" py={10} textAlign="center">
      <Heading mb={5}>Enable Two-Factor Authentication</Heading>
      <Button colorScheme="orange" onClick={enable2FA}>Enable 2FA</Button>
    </Box>
  );
};

export default Enable2FAPage;
