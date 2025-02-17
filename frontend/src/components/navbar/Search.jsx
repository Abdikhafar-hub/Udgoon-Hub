import { Input, InputGroup, InputRightElement, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext"; 

function Search() {
  const { search, setSearch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    navigate(`/products?q=${e.target.value}`);
  };

  return (
    <Box position="relative" w="100%" maxW="950px" mx="auto">
      <InputGroup 
        size="lg"
        boxShadow="md"
        borderRadius="full"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Input
          placeholder="Search for a perfume..."
          value={search}
          onChange={handleSearch}
          h="55px"
          borderRadius="full"
          px={6}
          fontSize="1.2rem"
          border="2px solid transparent"
          _focus={{ borderColor: "goldenrod", boxShadow: "0 0 6px goldenrod" }}
        />
        <InputRightElement 
          width="3.5rem"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon 
            as={BiSearch} 
            fontSize="1.8rem" 
            color="gray.600" 
            cursor="pointer"
            _hover={{ color: "goldenrod" }}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Search;
