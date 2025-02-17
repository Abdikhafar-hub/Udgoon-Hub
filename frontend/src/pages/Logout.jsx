import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext"; 
import { Spinner, Box, Text } from "@chakra-ui/react";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
  
    setUser({
      status: false,
      name: "Guest",
      email: "",
      id: "",
      cart: [],
      totalPrice: 0,
    });
    localStorage.removeItem("user");
    localStorage.removeItem("token");

   
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, [setUser, navigate]);

  return (
    <Box textAlign="center" mt={10}>
      <Spinner size="xl" color="blue.500" />
      <Text fontSize="lg" mt={4}>Logging out...</Text>
    </Box>
  );
};

export default Logout;
