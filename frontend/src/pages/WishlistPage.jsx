import { useContext } from "react";
import { Box, Heading, VStack, Text, Button, Image } from "@chakra-ui/react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Box w="90%" m="auto" py={10}>
      <Heading mb={5}>My Wishlist</Heading>

      {wishlist.length > 0 ? (
        <VStack spacing={4}>
          {wishlist.map((item) => (
            <Box key={item.id} p={4} border="1px solid #ddd" borderRadius="md" w="100%" textAlign="center">
              <Image src={item.image_link} alt={item.name} boxSize="100px" objectFit="cover" borderRadius="md" />
              <Text fontSize="lg">{item.name}</Text>
              <Text fontSize="md">KSH {item.price}</Text>
              <Button colorScheme="blue" mt={2} onClick={() => navigate(`/product/${item.id}`)}>View Product</Button>
            </Box>
          ))}
        </VStack>
      ) : (
        <Text>No wishlist items found.</Text>
      )}
    </Box>
  );
};

export default WishlistPage;
