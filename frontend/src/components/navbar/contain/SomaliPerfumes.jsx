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

function ArabicSomaliPerfumes() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Arabic & Somali Perfumes
        </Box>
      </PopoverTrigger>
      <PopoverContent w="700px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" flexWrap="wrap" justifyContent="space-between">
            <Box>
              <Text className={NavStyle.greyHover} p="3px">
                9 PM 
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Rasasi La Yuqawam
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Lattafa Oud Mood
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Swiss Arabian Shaghaf Oud
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Al Haramain Amber Oud
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Amouage Interlude Man
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Ard Al Zaafaran Dirham
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Naseem Al Lail
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Anfar Bakhoor
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Somali Musk
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Somali Frankincense Perfume
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Lattafa Raghba
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Al Haramain L’Aventure
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Ajwad by Lattafa
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Arabian Oud Kalemat
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Somali Bakhoor
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                My Perfumes Oud Al Layl
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Somali Rose Perfume
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default ArabicSomaliPerfumes;
