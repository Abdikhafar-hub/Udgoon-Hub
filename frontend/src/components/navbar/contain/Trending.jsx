import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

import NavStyle from "../navbar.module.css";

function NewArrivals() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          New & Trending
        </Box>
      </PopoverTrigger>
      <PopoverContent w="500px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" flexWrap="wrap" justifyContent="space-between">
            
            {/* Latest Perfume Brands */}
            <Box>
              <Text className={NavStyle.greyHover} p="3px">
                Maison Francis Kurkdjian
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Juliette Has a Gun
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Nishane
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Creed Aventus
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Byredo Gypsy Water
              </Text>
            </Box>

            {/* New Arrivals */}
            <Box>
              <Text className={NavStyle.greyHover} p="3px">
                Roja Parfums Elysium
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Amouage Reflection Man
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Le Labo Santal 33
              </Text>
            </Box>

            {/* Trending Now */}
            <Box>
              <Text className={NavStyle.greyHover} p="3px">
                Baccarat Rouge 540
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dior Sauvage Elixir
              </Text>
            </Box>

          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default NewArrivals;
