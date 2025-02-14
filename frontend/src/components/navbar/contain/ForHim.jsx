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

function PerfumesForHim() {
  const navigate = useNavigate();

  function toggleSearch(e) {
    navigate(`/productpage?q=${e.target.innerHTML}`);
  }

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box
          onClick={() => {
            navigate("/perfumes-for-him");
          }}
          className={NavStyle.blackHover}
          p="7px"
        >
          Perfumes for Him
        </Box>
      </PopoverTrigger>
      <PopoverContent w="700px">
        <PopoverArrow />
        <PopoverBody p="25px">
          <Flex p="15px" justifyContent="space-between">
            <Box>
              <Box p="0.2px" bg="grey"></Box>
              <Text mb="5px" p="3px" fontWeight="bold">
                Men's Perfumes
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Dior Sauvage
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Bleu de Chanel
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Creed Aventus
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Armani Acqua di Gio
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Tom Ford Oud Wood
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Paco Rabanne 1 Million
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Versace Eros
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Jean Paul Gaultier Le Male
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Hugo Boss Bottled
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Yves Saint Laurent La Nuit de L'Homme
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Chanel Allure Homme Sport
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Prada Luna Rossa Carbon
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Givenchy Gentleman
              </Text>
              <Text className={NavStyle.greyHover} p="3px" onClick={toggleSearch}>
                Bentley for Men Intense
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PerfumesForHim;
