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
    <Box position="relative" w="100%" maxW="800px" mx="auto"> 
      <InputGroup 
        size="md" 
        boxShadow="sm" 
        borderRadius="full"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Input
          placeholder="Search for a perfume..."
          value={search}
          onChange={handleSearch}
          h="45px"  
          borderRadius="full"
          px={4}  
          fontSize="1rem"  
          border="2px solid transparent"
          _focus={{ borderColor: "goldenrod", boxShadow: "0 0 4px goldenrod" }}  
        />
        <InputRightElement 
          width="3rem"  
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon 
            as={BiSearch} 
            fontSize="1.5rem" 
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
