import {
  Box,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavStyle from "../navbar.module.css";
import { UserContext } from "../../../Contexts/UserContext";

function Brands() {
  const [brandnames, setBrandnames] = useState([
    "9 PM",
    "Rasasi La Yuqawam",
    "Lattafa Oud Mood",
  ]);
  const { user, setUser, search, setSearch } = useContext(UserContext);
  const [brandkeys, setBrandkeys] = useState([]);
  const navigate = useNavigate();

  const brands = {
    A: ["Ajwad by Lattafa", "Al Haramain Amber Oud", "Acqua di Gio"],
    B: ["Burberry Her", "Black Opium YSL", "Bleu de Chanel"],
    C: ["Creed Aventus", "Carolina Herrera Good Girl", "Chanel No. 5"],
    D: ["Dior Sauvage", "Dolce & Gabbana", "Dior J'adore"],
    G: ["Gucci Bloom", "Giorgio Armani My Way", "Gucci Guilty"],
    H: ["Hugo Boss Bottled", "Hawas Ice"],
    J: ["Jo Malone Peony & Blush Suede", "Jean Paul Gaultier Le Male"],
    L: ["Lattafa Raghba", "Lancôme La Vie Est Belle"],
    M: ["Marc Jacobs Daisy", "Maahir Legacy", "My Perfumes Oud Al Layl"],
    N: ["Naseem Al Lail"],
    P: ["Prada Candy", "Paco Rabanne 1 Million"],
    R: ["Rasasi La Yuqawam"],
    S: ["Swiss Arabian Shaghaf Oud", "Somali Rose Perfume", "Somali Musk"],
    T: ["Tom Ford Oud Wood", "Tom Ford Black Orchid"],
    V: ["Versace Eros", "Viktor & Rolf Flowerbomb"],
    Y: ["YSL Libre Intense", "Yves Saint Laurent Mon Paris"],
    Z: ["Zorah Biocosmetiques"],
  };

  function setkeys() {
    let arr = [];
    for (let keys in brands) {
      arr.push(keys);
    }
    setBrandkeys(arr);
  }
  function toggleSearch(e) {
    e.preventDefault();
    setSearch(brandnames[0]);
    navigate("/productpage");
  }
  useEffect(() => {
    setkeys();
  }, []);

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">Brands</Box>
      </PopoverTrigger>
      <PopoverContent w="90vw">
        <PopoverArrow />
        <PopoverHeader>
          <Box h="0.5px" bg="black" w="100%" m="auto"></Box>
          <Flex mx="50px" alignItems="center" justifyContent="space-between">
            <Flex gap="1px">
              {brandkeys.map((e) => (
                <Box
                  key={e}
                  className={NavStyle.greyHover}
                  p="10px"
                  onMouseOver={() => {
                    setBrandnames(brands[e]);
                  }}
                >
                  {e}
                </Box>
              ))}
            </Flex>
            <Box>View All Brands</Box>
          </Flex>
          <Box h="1px" bg="black" w="100%" m="auto"></Box>
        </PopoverHeader>
        <PopoverBody>
          <SimpleGrid mx="50px" columns={5}>
            {brandnames.map((e) => {
              return (
                <Box key={e} className={NavStyle.greyHover}>
                  <Text onClick={toggleSearch}>{e}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Brands;
