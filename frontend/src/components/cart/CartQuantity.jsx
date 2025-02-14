import { Box, Button, Center } from "@chakra-ui/react";
import { useState } from "react";

function CartQuantity({ quantity = 1 }) {
  const [count, setCount] = useState(quantity);

  return (
    <Center>
      <Box display="flex" alignItems="center" gap="10px" justifyContent="center">
        <Button
          w="30px"
          h="30px"
          onClick={() => setCount(count - 1)}
          disabled={count <= 1}
        >
          -
        </Button>
        <Text>{count}</Text> {/* ✅ Make sure this is NOT an object */}
        <Button w="30px" h="30px" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </Box>
    </Center>
  );
}

export default CartQuantity;
