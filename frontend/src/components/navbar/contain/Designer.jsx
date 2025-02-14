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

function DesignerPerfumes() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Designer Perfumes
        </Box>
      </PopoverTrigger>
      <PopoverContent w="700px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" flexWrap="wrap" justifyContent="space-between">
            <Box>
              <Text className={NavStyle.greyHover} p="3px">
                Chanel No. 5
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dior Sauvage
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Tom Ford Black Orchid
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Yves Saint Laurent Libre
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Gucci Bloom
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Carolina Herrera Good Girl
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Giorgio Armani Si
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Versace Bright Crystal
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Prada Candy
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Burberry Her
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Dolce & Gabbana Light Blue
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Givenchy L’Interdit
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Valentino Donna Born in Roma
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Lancôme La Vie Est Belle
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Jo Malone English Pear & Freesia
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Jean Paul Gaultier Scandal
              </Text>
              <Text className={NavStyle.greyHover} p="3px">
                Montblanc Legend
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default DesignerPerfumes;
