import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

function Account() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Flex alignItems="center" gap="10px" cursor="pointer">
          <RxPerson size="20px" />
          <Text display={{ lg: "initial", md: "none", sm: "none", base: "none" }}>
            {user.status ? user.name || "User" : "Guest"}
          </Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader pt="40px" bg="#f9f9f9">
          {user.status ? (
            <Flex flexDir="column" rowGap="10px">
              <Text fontWeight="bold">Welcome, {user.name || "User"} 👋</Text>
              <Button colorScheme="red" onClick={() => navigate("/logout")}>Logout</Button>

            </Flex>
          ) : (
            <Flex flexDir="column" rowGap="10px">
              <Text fontWeight="bold">Welcome, Guest 👤</Text>
              <Button colorScheme="blue" onClick={() => navigate("/login")}>Login</Button>
              <Button colorScheme="gray" onClick={() => navigate("/register")}>Sign Up</Button>
            </Flex>
          )}
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}


export default Account;
