import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  SimpleGrid,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavStyle from "../navbar.module.css";

function Sale() {
  const navigate = useNavigate();

  function toggleSearch(e) {
    navigate(`/productpage?q=${e.target.innerHTML}`);
  }

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Special Offers 🎉
        </Box>
      </PopoverTrigger>
      <PopoverContent w="95vw">
        <PopoverArrow />
        <PopoverBody bg="#f5f3f3" p="25px">
          <SimpleGrid gap="15px" columns={5}>
            
           
            <Box
              bg="white"
              display="flex"
              className={NavStyle.shadowHover}
              alignItems="center"
              gap="20px"
              px="20px"
              py="10px"
            >
              <Image w="50px" src="https://s1.thcdn.com/navigation/121/2019/08/%24-20190803-20190803.png" />
              <Text onClick={toggleSearch}>Perfume Sale</Text>
            </Box>

            
            <Box
              bg="white"
              display="flex"
              className={NavStyle.shadowHover}
              alignItems="center"
              gap="20px"
              px="20px"
              py="10px"
            >
              <Image w="50px" src="https://s1.thcdn.com/navigation/121/2019/11/2918246-200-20191108.png" />
              <Text onClick={toggleSearch}>Exclusive Fragrance Discounts</Text>
            </Box>

            
            <Box
              bg="white"
              display="flex"
              className={NavStyle.shadowHover}
              alignItems="center"
              gap="20px"
              px="20px"
              py="10px"
            >
              <Image w="50px" src="https://t3.ftcdn.net/jpg/04/21/84/18/360_F_421841842_dqzyI4XbXt7W0QiIdr1f2EFtz78f6TPa.jpg" />
              <Text onClick={toggleSearch}>Buy One Get One Free</Text>
            </Box>

           
            <Box
              bg="white"
              display="flex"
              className={NavStyle.shadowHover}
              alignItems="center"
              gap="20px"
              px="20px"
              py="10px"
            >
              <Image w="50px" src="https://s1.thcdn.com/navigation/121/2019/11/2918246-200-20191108.png" />
              <Text onClick={toggleSearch}>Clearance Perfumes</Text>
            </Box>

            
            <Box
              bg="white"
              display="flex"
              className={NavStyle.shadowHover}
              alignItems="center"
              gap="20px"
              px="20px"
              py="10px"
            >
              <Image w="50px" src="https://s1.thcdn.com/navigation/121/2019/09/Webp.net-resizeimage_%284%29-20190927.jpg" />
              <Text onClick={toggleSearch}>Luxury Gift Sets</Text>
            </Box>

           
            <Box
              bg="white"
              display="flex"
              className={NavStyle.shadowHover}
              alignItems="center"
              gap="20px"
              px="20px"
              py="10px"
            >
              <Image w="50px" src="https://s1.thcdn.com/navigation/121/2019/07/Coupon-20190718.jpg" />
              <Text onClick={toggleSearch}>All Perfume Coupons</Text>
            </Box>

            
            <Box
              bg="white"
              display="flex"
              className={NavStyle.shadowHover}
              alignItems="center"
              gap="20px"
              px="20px"
              py="10px"
            >
              <Image w="50px" src="https://s1.thcdn.com/navigation/121/2019/08/Label-20190803-20190803.png" />
              <Text onClick={toggleSearch}>Featured Fragrance Deals</Text>
            </Box>

          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Sale;
