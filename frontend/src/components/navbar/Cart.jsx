import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";

function Cart() {
  const { user } = useContext(UserContext);
  const cartItems = user?.cart || [];
  const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  useEffect(() => {
    console.log("Cart Updated:", totalQuantity);
  }, [totalQuantity, cartItems]);

  return (
    <Flex alignItems="center" position="relative" cursor="pointer" _hover={{ transform: "scale(1.1)", transition: "0.2s" }}>
      <Box position="relative">
        
        <AiOutlineShoppingCart size="28px" color="#333" />

        
        {totalQuantity > 0 && (
          <Box
            position="absolute"
            top="-5px"
            right="-5px"
            bg="red.500"
            color="white"
            fontSize="10px"
            fontWeight="bold"
            w="18px"
            h="18px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            boxShadow="0px 0px 8px rgba(0, 0, 0, 0.3)"
          >
            {totalQuantity}
          </Box>
        )}
      </Box>
      
    </Flex>
  );
}

export default Cart;
