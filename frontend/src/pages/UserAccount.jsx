import { useContext, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Box, Text, Heading, VStack, Divider, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.status) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <Box w="80%" m="auto" py={10} textAlign="center">
      <Heading fontSize="3xl" mb={5}>
        {user.status ? `Welcome, ${user.name}!` : "Guest Account"}
      </Heading>
      <Text fontSize="lg" mb={3}>Email: {user.email || "Not Available"}</Text>

      <Divider my={6} />

      <Heading fontSize="2xl" mb={3}>Shopping Summary</Heading>
      <VStack spacing={4}>
        <Text fontSize="lg">Total Items in Cart: {user.cart.length}</Text>
        <Text fontSize="lg">Total Spent: KSH {user.totalPrice.toFixed(2)}</Text>
      </VStack>

      <Divider my={6} />

      <Button
        colorScheme="red"
        mt={5}
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserAccount;
