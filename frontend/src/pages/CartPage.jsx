import { useContext } from "react";
import { Box, Button, Text, Image, VStack, HStack, Divider, Flex } from "@chakra-ui/react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const { user, addToCart, removeFromCart, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // ✅ Handle Delete Entire Item
  const deleteItem = (productId) => {
    setUser((prevUser) => {
      const updatedCart = prevUser.cart.filter((item) => item.id !== productId);
      const newTotalPrice = updatedCart.reduce(
        (acc, item) => acc + (Number(item.price) || 0) * item.quantity,
        0
      );
      return { ...prevUser, cart: updatedCart, totalPrice: newTotalPrice };
    });
  };

  if (!user.cart.length) {
    return (
      <Box textAlign="center" mt={10}>
        <Text fontSize="2xl" fontWeight="bold">Your cart is empty</Text>
        <Button mt={5} colorScheme="blue" onClick={() => navigate("/")}>
          Back to Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box w={{ base: "95%", md: "70%", lg: "60%" }} m="auto" py={10}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={5}>
        Your Cart
      </Text>

      {user.cart.map((item) => (
        <VStack key={item.id} border="1px solid #ddd" p={4} borderRadius="8px" w="100%" spacing={3} bg="white" boxShadow="lg">
          <Flex justify="space-between" w="100%">
            <Image src={item.image_link} alt={item.name} boxSize="120px" objectFit="cover" borderRadius="8px" />
            <Box flex="1" pl={4}>
              <Text fontSize="20px" fontWeight="bold">{item.name}</Text>
              <Text fontSize="lg">Price: <b>KSH {Number(item.price) || 0}</b></Text>
              <Text fontSize="md">Quantity: {item.quantity}</Text>

              <HStack mt={2}>
                <Button size="sm" isDisabled={item.quantity === 1} onClick={() => removeFromCart(item.id)}>-</Button>
                <Button size="sm" onClick={() => addToCart(item)}>+</Button>
                <Button size="sm" colorScheme="red" onClick={() => deleteItem(item.id)}>
                  <FaTrashAlt />
                </Button>
              </HStack>
            </Box>
          </Flex>
        </VStack>
      ))}

      <Divider my={6} />
      <Text fontSize="2xl" fontWeight="bold" textAlign="right">
        Total Price: KSH {user.totalPrice ? user.totalPrice.toFixed(2) : "0.00"}
      </Text>

      <HStack mt={8} w="100%">
        <Button flex="1" variant="outline" colorScheme="blue" onClick={() => navigate("/")}>
          Back to Shopping
        </Button>
        <Button flex="1" colorScheme="blackAlpha" bg="black" color="white" _hover={{ bg: "cyan.500" }} onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </Button>
      </HStack>
    </Box>
  );
};

export default CartPage;
