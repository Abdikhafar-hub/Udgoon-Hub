import { useContext, useEffect, useState } from "react";
import { Box, chakra, Text, Image, Button, Heading, Center, HStack, Icon, Tooltip, SimpleGrid, Select, Stack, Radio, RadioGroup, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { user, search, setSearch, products } = useContext(UserContext);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [noofElements, setNoofElements] = useState(10);
  const [sortBy, setsortBy] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === "asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setSortedProducts(filteredProducts);
    setNoofElements(10);
  }, [search, sortBy, products]);

  function handleQuickBuy(product) {
    if (!user.status) {
      return navigate("/login");
    }

    console.log("Quick Buy:", product);
  }

  const loadMore = () => {
    setNoofElements((prev) => prev + 10);
  };

  
  return (
    <>
      <Box w="95%" m={5} justifyContent="space-evenly">
        <Box>
          <Heading>The Holiday Countdown is On!</Heading>
          <Text margin="auto" textAlign="left" fontWeight="100">
            The Countdown is on! Save up to 30% off your purchase when you use
            code COUNTDOWN. But be quick! Discount drops 1% every 3 hours.
          </Text>
        </Box>
      </Box>

      <SimpleGrid gap={10} gridTemplateColumns={"1fr 1fr"} p={2}>
        <HStack display="grid" gridTemplateColumns={"0.5fr 1.5fr"} p={2}>
          <Heading fontWeight="200">Category</Heading>
          <Select placeholder="Select option" onChange={(e) => setSearch(e.target.value)}>
            <option value="perfume">Perfume</option>
            <option value="oud">Oud</option>
            <option value="bakhoor">Bakhoor</option>
          </Select>
        </HStack>

        <HStack>
          <RadioGroup onChange={setsortBy} value={sortBy}>
            <Stack direction="row">
              <Radio value="asc">Price Low To High</Radio>
              <Radio value="desc">Price High To Low</Radio>
            </Stack>
          </RadioGroup>
        </HStack>
      </SimpleGrid>

      {sortedProducts.length !== 0 ? (
        <Box
          w="95%"
          margin="auto"
          display="grid"
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
          p={2}
          gap={5}
        >
          {sortedProducts.slice(0, noofElements).map((el, index) => (
            <Center py={6} key={index}>
              <Box key={el.id} rounded="lg" shadow="md" position="relative">
                {el.quantity < 1 ? (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Out Of Stock!</AlertTitle>
                  </Alert>
                ) : (
                  ""
                )}
                <Box cursor={"pointer"} onClick={() => navigate(`/product/${el.id}`)}>
                  <Image
                    boxSize="270"
                    src={el.image_link}
                    alt={el.name}
                    roundedTop="lg"
                    objectFit={"contain"}
                  />
                </Box>
                <Heading as="h3" fontSize="sm" fontWeight="semibold" lineHeight="tight" p={2}>
                  {el.name}
                </Heading>
                <Text fontSize="lg" fontWeight="600" textAlign="center" p={1}>
                  KSH {el.price}
                </Text>
                <HStack
                  p={1}
                  margin="auto"
                  justifyContent="space-evenly"
                  bg="gray.700"
                  fontWeight="600"
                  bgColor="black"
                  color="white"
                  borderRadius="0"
                  _hover={{ bg: "cyan.500" }}
                >
                  <Tooltip label="Add to cart" bg="white" placement={"top"} color={"gray.800"} fontSize={"1.2em"}>
                    <chakra.a onClick={() => handleQuickBuy(el)} display={"flex"} margin="auto">
                      <HStack>
                        <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                        <Text fontSize="md" fontWeight="600">QUICKBUY</Text>
                      </HStack>
                    </chakra.a>
                  </Tooltip>
                </HStack>
              </Box>
            </Center>
          ))}
        </Box>
      ) : (
        <Image
          m="auto"
          src="https://ih1.redbubble.net/image.1304795334.8057/pp,840x830-pad,1000x1000,f8f8f8.jpg"
        />
      )}

      <Button
        fontWeight="600"
        bgColor="black"
        color="white"
        borderRadius="0"
        border={"2px solid black"}
        _hover={{ bg: "cyan.500" }}
        onClick={() => loadMore()}
        p={4}
      >
        Load More
      </Button>
    </>
  );
};

export default ProductPage;
