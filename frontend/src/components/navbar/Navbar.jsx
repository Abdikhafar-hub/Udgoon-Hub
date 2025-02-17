import { Box, Flex, Text, Link } from "@chakra-ui/react";
import TopNav from "./TopNav";
import Search from "./Search";
import Account from "./Acount";
import Cart from "./Cart";
import Navmenu from "./Navmenu";
import { UserContext } from "../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user } = useContext(UserContext);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  function handleClickLogo() {
    navigate("/");
  }

  function handleCartClick(e) {
    e.preventDefault();
    navigate("/CartPage");
  }

  useEffect(() => {
    setCartCount(user.cart?.reduce((acc, item) => acc + item.quantity, 0) || 0);
  }, [user.cart]);

  return (
    <Flex
      position="sticky"
      top="0"
      zIndex="999"
      w="100%"
      bg="white"
      flexDir="column"
      boxShadow="0px 2px 5px rgba(0,0,0,0.1)"
    >
      <TopNav />

      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={6} 
        py={3} 
        borderBottom="2px solid black"
      >
        {/* ✅ Logo Adjusted for Mobile & Desktop */}
        <Flex cursor="pointer" onClick={handleClickLogo} flexDir="column">
          <Text 
            fontWeight="bold" 
            fontSize={{ base: "1.5rem", md: "2.5rem" }}  // ✅ Smaller on mobile, same on desktop
            fontFamily="'Playfair Display', serif"
            color="goldenrod"
            textShadow="1px 1px 5px rgba(0, 0, 0, 0.15)"
            mb={0}
            h={{ base: "35px", md: "60px" }}  // ✅ Adjust height for mobile
          >
            UdgoonHub
          </Text>
          <Text 
            fontSize={{ base: "0.7rem", md: "1rem" }}  // ✅ Smaller tagline on mobile
            fontFamily="'Merriweather', serif"
            color="gray.700" 
            mb={0}
          >
            Where Fragrance Meets Elegance ✨
          </Text>
        </Flex>

        <Box flex={1} mx={6} display={{ base: "none", lg: "block" }}>
          <Search />
        </Box>

        <Flex alignItems="center" gap={6}>
          <Box display={{ base: "block", lg: "none" }}>
            <Navmenu />
          </Box>
          <Account /> 
          <Link onClick={handleCartClick}>
            <Cart num={cartCount} />
          </Link>
        </Flex>
      </Flex>

      <Box display={{ base: "block", lg: "none" }} px={4} py={2}>
        <Search />
      </Box>
    </Flex>
  );
}

export default Navbar;
