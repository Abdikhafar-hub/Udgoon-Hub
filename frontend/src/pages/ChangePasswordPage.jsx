import { useState } from "react";
import { Box, Heading, Input, Button, VStack, FormControl, FormLabel, FormErrorMessage, useToast, Spinner } from "@chakra-ui/react";
import axios from "axios";

const ChangePasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          title: "Authentication Required",
          description: "Please log in before changing your password.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      await axios.post(`${process.env.REACT_APP_API_URL}/user/security/change-password`, 
      { password }, 
      {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast({
        title: "Success",
        description: "Password changed successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to change password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="90%" maxW="400px" m="auto" py={10} textAlign="center">
      <Heading mb={5}>Change Password</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
         
          <FormControl isRequired>
            <FormLabel>New Password</FormLabel>
            <Input 
              type="password" 
              placeholder="Enter new password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </FormControl>

        
          <FormControl isRequired isInvalid={confirmPassword && password !== confirmPassword}>
            <FormLabel>Confirm New Password</FormLabel>
            <Input 
              type="password" 
              placeholder="Confirm new password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            {confirmPassword && password !== confirmPassword && (
              <FormErrorMessage>Passwords do not match.</FormErrorMessage>
            )}
          </FormControl>

        
          <Button 
            type="submit" 
            colorScheme="blue" 
            isLoading={loading} 
            isDisabled={!password || !confirmPassword || password !== confirmPassword}
            width="100%"
          >
            {loading ? <Spinner size="sm" color="white" mr={2} /> : "Update Password"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ChangePasswordPage;
