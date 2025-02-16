import { Input, InputGroup, InputRightAddon, Box } from "@chakra-ui/react";
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
    <Box position="relative" w="100%" maxW="900px" mx="auto"> 
      <InputGroup size="md" w="100%">
        <Input
          placeholder="Search for a perfume..."
          value={search}
          onChange={handleSearch}
          h="45px"
        />
        <InputRightAddon
          children={<BiSearch />}
          cursor="pointer"
        />
      </InputGroup>
    </Box>
  );
}

export default Search;
