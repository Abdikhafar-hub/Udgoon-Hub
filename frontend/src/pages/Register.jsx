import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";
import { useToast } from "@chakra-ui/react";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  

 


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = { email, password, name: username };
    console.log(user);
    try {
      const response = await axios.post(
        "https:",
        user,
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      if (response.data == "User already exists") {
        toast({
          title: `User already exists, Please go to Log in`,
          status: "warning",
          isClosable: true,
        });
      }
      if (response.data == "Check your email for otp") {
        toast({
          title: `Check your email for otp`,
          status: "success",
          isClosable: true,
        });
        navigate("/verification");
      }
      console.log(response.data);
      
    } catch (error) {
      console.error("Registration failed:", error);
      
    }
  };

  return (
    <Flex
      minH={"90vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={5} mx={"auto"} maxW={"lg"} w="100%">
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>User Name</FormLabel>
              <Input
                type="email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                onClick={handleLogin}
                fontWeight="600"
                bgColor="black"
                color="white"
                borderRadius="0"
                _hover={{
                  bg: "cyan.500",
                }}
                isLoading={loading}
                loadingText="Verifying..."
              >
                SIGN UP
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to="/login">
                    <Text color={"blue.400"}> Login</Text>
                  </Link>
                </Text>
                <Text align={"center"}>
                  By proceeding, you are confirming that you agree to our{" "}
                  <strong>Terms and Conditions</strong> and{" "}
                  <strong>Privacy Policy</strong>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
