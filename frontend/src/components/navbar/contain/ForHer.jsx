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
import { useNavigate } from "react-router-dom";

import NavStyle from "../navbar.module.css";

function PerfumesForHer() {
  const navigate = useNavigate();

  function toggleSearch(e) {
    navigate(`/productpage?q=${e.target.innerHTML}`);
  }

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box
          onClick={() => {
            navigate("/perfumes-for-her");
          }}
          className={NavStyle.blackHover}
          p="7px"
        >
          Perfumes for Her
        </Box>
      </PopoverTrigger>
      <PopoverContent w="700px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" justifyContent="space-between">
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Women's Perfumes
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Chanel No. 5
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Dior J'adore
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Gucci Bloom
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Yves Saint Laurent Mon Paris
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Lancôme La Vie Est Belle
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Viktor & Rolf Flowerbomb
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Carolina Herrera Good Girl
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Dolce & Gabbana Light Blue
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Marc Jacobs Daisy
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Burberry Her
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Giorgio Armani My Way
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Prada Candy
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Tom Ford Black Orchid
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Givenchy L'Interdit
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Jo Malone Peony & Blush Suede
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PerfumesForHer;
