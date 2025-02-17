import { useContext, useEffect, useState } from "react";
import { Box, Button, Text, Image, VStack, HStack, Divider, Flex, Icon, Badge } from "@chakra-ui/react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaStar, FaRegStar } from "react-icons/fa";

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

  const [productData, setProductData] = useState({});

  useEffect(() => {
    setProductData((prevData) => {
      const newData = { ...prevData };
      cartItems.forEach((item) => {
        if (!newData[item.id]) {
          const originalPrice = Number(item.price) * (1 + Math.random() * 0.3 + 0.1);
          newData[item.id] = {
            rating: (Math.random() * (5 - 3) + 3).toFixed(1),
            reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
            originalPrice: Math.round(originalPrice / 100) * 100,
          };
        }
      });
      return newData;
    });
  }, [cartItems]);

  // 7-Day Promo Countdown Timer
  const getEndTime = () => {
    const storedEndTime = localStorage.getItem("promoEndTime");
    if (storedEndTime && Number(storedEndTime) > Date.now()) {
      return Number(storedEndTime);
    } else {
      const newEndTime = Date.now() + 7 * 24 * 60 * 60 * 1000; 
      localStorage.setItem("promoEndTime", newEndTime);
      return newEndTime;
    }
  };

  const [timeLeft, setTimeLeft] = useState(getEndTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getEndTime() - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  if (cartItems.length === 0) {
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
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={2}>
        Your Cart
      </Text>

      
      <Text fontSize="lg" color="blackAlpha.800" textAlign="center" fontWeight="medium" mb={5}>
        🚚 Delivery available <strong>countrywide</strong> at customer cost, or pick up at a central location.
      </Text>

      
      <Text fontSize="lg" color="red.500" textAlign="center" fontWeight="bold">
        🎉 Limited-Time Offer Ends In: {formatTime(timeLeft)}
      </Text>

      {cartItems.map((item) => {
        const { rating, reviews, originalPrice } = productData[item.id] || { rating: 4.0, reviews: 50, originalPrice: item.price * 1.2 };

        const discountPercentage = Math.round(((originalPrice - item.price) / originalPrice) * 100);

        return (
          <VStack key={item.id} border="1px solid #ddd" p={4} borderRadius="8px" w="100%" spacing={3} bg="white" boxShadow="lg">
            <Flex justify="space-between" w="100%">
              <Image src={item.image_link} alt={item.name} boxSize="120px" objectFit="cover" borderRadius="8px" />
              <Box flex="1" pl={4}>
                <Text fontSize="20px" fontWeight="bold">{item.name}</Text>
                
                
                <HStack>
                  <Text fontSize="2xl" fontWeight="bold">KSH {Number(item.price).toLocaleString()}</Text>
                  <Text fontSize="lg" as="s" color="gray.500">KSH {originalPrice.toLocaleString()}</Text>
                  <Badge colorScheme="orange" fontSize="sm" p={1} borderRadius="5px">
                    -{discountPercentage}%
                  </Badge>
                </HStack>

                <Text fontSize="md">Quantity: {item.quantity}</Text>

                
                <HStack mt={1}>
                  {Array(5).fill(0).map((_, i) => (
                    <Icon key={i} as={i < Math.round(rating) ? FaStar : FaRegStar} color="yellow.400" />
                  ))}
                  <Text fontSize="sm" color="gray.600">({reviews} reviews)</Text>
                </HStack>

                <HStack mt={2}>
                  <Button size="sm" onClick={() => removeFromCart(item.id)}>-</Button>
                  <Text>{item.quantity}</Text>
                  <Button size="sm" onClick={() => addToCart(item)}>+</Button>
                  <Button size="sm" colorScheme="red" onClick={() => deleteItem(item.id)}>
                    <FaTrashAlt />
                  </Button>
                </HStack>
              </Box>
            </Flex>
          </VStack>
        );
      })}

      <Divider my={6} />
      <Text fontSize="2xl" fontWeight="bold" textAlign="right">
        Total Price: KSH {user.totalPrice ? user.totalPrice.toFixed(2) : "0.00"}
      </Text>

      <HStack mt={8} w="100%">
        <Button flex="1" variant="outline" colorScheme="blue" onClick={() => navigate("/")}>
          Back to Shopping
        </Button>
        <Button
          flex="1"
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
