import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext"; // ✅ Ensure this path is correct

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { search, setSearch } = useContext(UserContext); // ✅ Now, this will work

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSearch(searchInput);
    console.log(searchInput);
    navigate(`/products?q=${searchInput}`);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputGroup w="100%" h="40px" size="sm">
      <Input
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        value={searchInput}
        h="100%"
        placeholder="Search for product or brand..."
      />
      <InputRightAddon
        h="100%"
        bg="white"
        onClick={handleSearch}
        children={<BiSearch />}
      />
    </InputGroup>
  );
}

export default Search;
