import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Center,
  Divider,
  Box,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import CartQuantity from "./CartQuantity";

function CartTable() {
  const [data, setData] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [cartTotal, setCartTotal] = useState(0);
  const toast = useToast();

  useEffect(() => {
    console.log("User Cart Data:", user.cart); // 🛠️ Debugging

    axios
      .get(`https://skinstore.onrender.com/product/usercart/${user.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
      });
  }, [user.id]);

  function toggleRemoveFromCart(id) {
    axios
      .delete(`https://skinstore.onrender.com/product/cart/delete/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        toast({
          title: "Item removed from cart",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error("Error removing item:", err);
      });
  }

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      cart: Array.isArray(data) ? data.length : 0, // 🛠️ Ensure cart is always an array
      totalPrice: data.reduce((acc, item) => acc + item.price, 0),
    }));

    setCartTotal(data.reduce((acc, item) => acc + item.price, 0));
  }, [data]);

  if (data.length === 0) {
    return (
      <Box>
        <Divider />
        <Center my="50px">
          <Text fontSize="30px">No Items In Cart!</Text>
        </Center>
        <Divider />
      </Box>
    );
  }

  return (
    <>
      <TableContainer minW="1000px" maxW="1400px">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <Image h="100px" src={item.image_link || "https://via.placeholder.com/150"} />
                </Td>
                <Td>
                  <Text fontWeight="semibold" fontSize="20px">
                    {item.name}
                  </Text>
                  <Text fontSize="14px" color="gray.500">
                    {item.brand}
                  </Text>
                </Td>
                <Td>KSH {item.price}</Td>
                <Td>
                  <CartQuantity quantity={item.quantity} />
                </Td>
                <Td>
                  <Button colorScheme="red" onClick={() => toggleRemoveFromCart(item.id)}>
                    <RxCrossCircled />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Divider />
      <Box textAlign="right" w="100%" p={4}>
        <Text fontSize="20px">
          Cart Subtotal: <strong>KSH {cartTotal}</strong>
        </Text>
      </Box>
      <Divider />
    </>
  );
}

export default CartTable;
