import { Box, Flex, Text } from "@chakra-ui/react";

import TopNav from "./TopNav";
import Search from "./Search";
import Acount from "./Acount";
import Cart from "./Cart";
import Brands from "./contain/Brands";
import Sale from "./contain/Sale";
import PerfumesForHim from "./contain/ForHim";
import DesignerPerfumes from "./contain/Designer";
import PerfumesForHer from "./contain/ForHer";
import ArabicSomaliPerfumes from "./contain/SomaliPerfumes";
import Trending from "./contain/Trending";
import Blog from "./contain/Blog";
import Navmenu from "./Navmenu";
import Popsearch from "./Popsearch";
import { UserContext } from "../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { user } = useContext(UserContext);
  const [num, setNum] = useState(0);
  const navigate = useNavigate();

  function handleClickLogo() {
    navigate("/");
  }

  function handleCartClick(e) {
    e.preventDefault();
    navigate("/CartPage");
  }

  useEffect(() => {
    setNum(user.cart);
  }, [user.cart]);

  return (
    <Flex
      position="sticky"  
      top="0"            
      zIndex="999"       
      w="100%"
      bg="white"
      flexDir="column"
      alignItems="space-between"
      boxShadow="0px 2px 5px rgba(0,0,0,0.1)" 
    >
      <TopNav />
      <Flex
        display={{ lg: "none", md: "flex", sm: "flex", base: "flex" }}
        gap="15px"
        alignItems="center"
        w="80%"
      >
        <Flex w="80%" gap="15px" alignItems="center" m={3}>
          <Navmenu />
          <Popsearch />
        </Flex>
        <Flex w="80%" justifyContent="space-evenly">
          <Acount />
          <Cart />
        </Flex>
      </Flex>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        borderBottom="2px solid black"
        pb="20px"
      >
        <Flex
          cursor="pointer"
          onClick={handleClickLogo}
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
          justifyContent="center"
          flexDir="column"
        >
          <Text
            fontWeight="530"
            fontSize="50px"
            color="#2e3337"
            mb={0}
            h="55px"
          >
            UdgoonHub
          </Text>
          <Text fontSize="13px" color="#2e3337" mb={0}>
            Where Fragrance meet Elegance
          </Text>
        </Flex>
        <Box w="40%" display={{ lg: "flex", md: "none", sm: "none", base: "none" }}>
          <Search />
        </Box>
        <Flex w="20%" justifyContent="space-evenly" display={{ lg: "flex", md: "none", sm: "none", base: "none" }}>
          <Acount />
          <Link onClick={handleCartClick}>
            <Cart num={num} />
          </Link>
        </Flex>
      </Box>

      <Flex
        display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
        gap="10px"
        bg="white"
        boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
        justifyContent="center"
        color="#333"
        fontSize="15px"
      >
        <Brands />
        <Sale />
        <PerfumesForHim />
        <DesignerPerfumes />
        <PerfumesForHer />
        <ArabicSomaliPerfumes />
        <Trending />
        <Blog />
      </Flex>
    </Flex>
  );
}

export default Navbar;
