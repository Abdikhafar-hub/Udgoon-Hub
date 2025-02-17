import { useContext, useEffect } from "react";
import { Box, Button, Text, Image, VStack, HStack, Divider, Flex, Icon, Badge, SimpleGrid } from "@chakra-ui/react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const { user, addToCart, removeFromCart, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const cartItems = user?.cart || [];

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0) * item.quantity, 0);
    setUser((prevUser) => ({
      ...prevUser,
      totalPrice: newTotalPrice,
    }));
  }, [cartItems, setUser]);

  const deleteItem = (productId) => {
    setUser((prevUser) => {
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      return { 
        ...prevUser, 
        cart: updatedCart, 
        totalPrice: updatedCart.reduce((acc, item) => acc + (Number(item.price) || 0) * item.quantity, 0) 
      };
    });
  };

  if (cartItems.length === 0) {
    return (
      <Box textAlign="center" mt={10}>
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">Your cart is empty</Text>
        <Button mt={5} colorScheme="blue" onClick={() => navigate("/")}>
          Back to Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box w={{ base: "95%", md: "70%", lg: "60%" }} m="auto" py={10}>
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" textAlign="center" mb={4}>
        Your Cart
      </Text>

      <Text fontSize={{ base: "md", md: "lg" }} color="blackAlpha.800" textAlign="center" fontWeight="medium" mb={5}>
        🚚 Delivery available <strong>countrywide</strong> at customer cost, or pick up at a central location.
      </Text>

     
      <SimpleGrid columns={{ base: 2, md: 1 }} spacing={4}>
        {cartItems.map((item) => (
          <VStack 
            key={item.id} 
            border="1px solid #ddd" 
            p={{ base: 3, md: 4 }} 
            borderRadius="8px" 
            spacing={2} 
            bg="white" 
            boxShadow="lg"
          >
            <Flex 
              direction={{ base: "column", md: "row" }} 
              align="center"
              w="100%"
            >
              <Image 
                src={item.image_link} 
                alt={item.name} 
                boxSize={{ base: "80px", md: "120px" }} 
                objectFit="cover" 
                borderRadius="8px"
              />
              
              <Box flex="1" pl={{ base: 0, md: 4 }} textAlign={{ base: "center", md: "left" }}>
                <Text fontSize={{ base: "sm", md: "20px" }} fontWeight="bold">{item.name}</Text>
                
                <HStack justify={{ base: "center", md: "flex-start" }} mt={1}>
                  <Text fontSize={{ base: "sm", md: "2xl" }} fontWeight="bold">KSH {Number(item.price).toLocaleString()}</Text>
                  <Badge colorScheme="orange" fontSize="xs" p={1} borderRadius="5px">
                    -10%
                  </Badge>
                </HStack>

                <Text fontSize={{ base: "xs", md: "md" }}>Quantity: {item.quantity}</Text>

                <HStack mt={2} justify={{ base: "center", md: "flex-start" }}>
                  <Button size="xs" onClick={() => removeFromCart(item.id)}>-</Button>
                  <Text fontSize={{ base: "xs", md: "md" }}>{item.quantity}</Text>
                  <Button size="xs" onClick={() => addToCart(item)}>+</Button>
                  <Button size="xs" colorScheme="red" onClick={() => deleteItem(item.id)}>
                    <FaTrashAlt />
                  </Button>
                </HStack>
              </Box>
            </Flex>
          </VStack>
        ))}
      </SimpleGrid>

      <Divider my={6} />
      <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" textAlign="right">
        Total Price: KSH {user.totalPrice ? user.totalPrice.toFixed(2) : "0.00"}
      </Text>

      <HStack mt={6} w="100%" spacing={2} flexDirection={{ base: "column", md: "row" }}>
        <Button 
          w="100%" 
          variant="outline" 
          colorScheme="blue" 
          onClick={() => navigate("/")}
        >
          Back to Shopping
        </Button>
        <Button
          w="100%"
          colorScheme="blackAlpha"
          bg="black"
          color="white"
          _hover={{ bg: "cyan.500" }}
          onClick={() => navigate(user.status ? "/checkout" : "/login", { state: { totalPrice: user.totalPrice } })}
        >
          Proceed to Checkout
        </Button>
      </HStack>
    </Box>
  );
};

export default CartPage;
