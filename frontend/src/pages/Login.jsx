import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password },
      { withCredentials: true }
    );

    setLoading(false);

    console.log("Login Response:", response.data); // ✅ Debugging

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      
      // ✅ Fix: Ensure name is included in the user object
      const userData = {
        name: response.data.user.name || "User",  // ✅ Store the name
        email: response.data.user.email,
        id: response.data.user.id,
        status: true,
        cart: [],
        totalPrice: 0
      };

      setUser(userData);  // ✅ Update User Context
      localStorage.setItem("user", JSON.stringify(userData)); // ✅ Store in local storage

      toast({
        title: `Welcome, ${userData.name}!`,
        status: "success",
        isClosable: true,
      });
      navigate("/");
    }
  } catch (error) {
    setLoading(false);
    toast({
      title: "Login Failed",
      description: error.response?.data || "Invalid credentials",
      status: "error",
      isClosable: true,
    });
  }
};


  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={5} mx={"auto"} maxW={"lg"} w="100%">
        <Stack align={"center"}>
          <Heading fontWeight={350} fontSize={"4xl"}>Existing Customers</Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
          <FormControl id="login-email">
  <FormLabel>Email Address</FormLabel>
  <Input type="email" onChange={(e) => setEmail(e.target.value)} />
</FormControl>
<FormControl id="login-password">
  <FormLabel>Password</FormLabel>
  <Input type="password" onChange={(e) => setPassword(e.target.value)} />
</FormControl>

            <Stack spacing={10}>
              <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
                <Link to="/register">
                  <Text color={"blue.400"}>New Customer?</Text>
                </Link>
              </Stack>
              <Button
                onClick={handleLogin}
                fontWeight="600"
                bgColor="black"
                color="white"
                borderRadius="0"
                _hover={{ bg: "cyan.500" }}
                isLoading={loading}
                loadingText="Logging in..."
              >
                LOGIN
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
