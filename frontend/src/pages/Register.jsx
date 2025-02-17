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

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { username, email, password };

    try {
      const response = await axios.post("https://udgoon-hub.onrender.com/api/auth/register", userData, {
        withCredentials: true,
      });

      setLoading(false);
      if (response.data === "User already exists") {
        toast({
          title: "User already exists, please log in.",
          status: "warning",
          isClosable: true,
        });
      } else {
        toast({
          title: "Registration Successful! Please log in.",
          status: "success",
          isClosable: true,
        });
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: "Registration Failed",
        description: error.response?.data || "An error occurred",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH={"90vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={5} mx={"auto"} maxW={"lg"} w="100%">
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
          <FormControl id="username">
  <FormLabel>Username</FormLabel>
  <Input type="text" onChange={(e) => setUsername(e.target.value)} />
</FormControl>
<FormControl id="register-email">
  <FormLabel>Email Address</FormLabel>
  <Input type="email" onChange={(e) => setEmail(e.target.value)} />
</FormControl>
<FormControl id="register-password">
  <FormLabel>Password</FormLabel>
  <Input type="password" onChange={(e) => setPassword(e.target.value)} />
</FormControl>

            <Stack spacing={10}>
              <Button
                onClick={handleRegister}
                fontWeight="600"
                bgColor="black"
                color="white"
                borderRadius="0"
                _hover={{ bg: "cyan.500" }}
                isLoading={loading}
                loadingText="Signing Up..."
              >
                SIGN UP
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to="/login">
                    <Text color={"blue.400"}>Login</Text>
                  </Link>
                </Text>
                <Text align={"center"}>
                  By proceeding, you are confirming that you agree to our{" "}
                  <strong>Terms and Conditions</strong> and <strong>Privacy Policy</strong>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
