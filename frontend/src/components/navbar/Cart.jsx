import { Box, Flex, Text } from "@chakra-ui/react";
import { BsMinecartLoaded } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";

function Cart() {
  const { user } = useContext(UserContext);

  // ✅ Fix: Ensure totalQuantity updates correctly
  const totalQuantity = user.cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  useEffect(() => {
    console.log("Cart Updated:", totalQuantity);
  }, [totalQuantity, user.cart]); 

  return (
    <Flex alignItems="center">
      <Box display="flex" alignItems="center" h="30px">
        <BsMinecartLoaded size="20px" />
        <Box h="100%">
          <Text
            top="0px"
            right="0px"
            px="3.5px"
            h="13px"
            color="white"
            fontSize="8px"
            bg="black"
            borderRadius="50%"
          >
            {totalQuantity || 0} 
          </Text>
        </Box>
      </Box>
      <Text display={{ lg: "initial", md: "none", sm: "none", base: "none" }}>
        Cart
      </Text>
    </Flex>
  );
}

export default Cart;
