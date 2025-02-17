import {
  Popover,
  PopoverTrigger,
  PopoverContent,
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

  
  const firstName = user.name && user.name !== "User"
    ? user.name.split(" ")[0] 
    : user.email
    ? user.email.split("@")[0] 
    : "Guest";

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Flex alignItems="center" gap="10px" cursor="pointer">
          <RxPerson size="20px" />
          <Text display={{ lg: "initial", md: "none", sm: "none", base: "none" }}>
            {user.status ? `Welcome, ${firstName}` : "Welcome, Guest"}
          </Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <Flex flexDir="column" rowGap="10px" p={4}>
          {user.status ? (
            <>
              <Text fontWeight="bold">Hello, {firstName} 👋</Text>
              <Text>Email: {user.email}</Text>
              <Button colorScheme="blue" onClick={() => navigate("/useraccount")}>
                View Profile
              </Button>
              <Button colorScheme="red" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Text fontWeight="bold">Welcome, Guest 👤</Text>
              <Button colorScheme="blue" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button colorScheme="gray" onClick={() => navigate("/register")}>
                Sign Up
              </Button>
            </>
          )}
        </Flex>
      </PopoverContent>
    </Popover>
  );
}

export default Account;
