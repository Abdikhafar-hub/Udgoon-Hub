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

function UserAccount() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  console.log("User data:", user);  

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Flex alignItems="center" gap="10px">
          <RxPerson size="20px" ml="" />
          <Text display={{ lg: "initial", md: "none", sm: "none", base: "none" }}>
            {user?.name || "Account"}
          </Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader pt="40px" bg="#f9f9f9">
          {/* Optional Admin Button */}
        </PopoverHeader>
        <PopoverBody p="20px">
          <Flex flexDir="column">
            <Text fontWeight="semibold">Name: {user?.name || "N/A"}</Text>
            <Text fontWeight="semibold">Email: {user?.email || "N/A"}</Text>
            <Button
              colorScheme="teal"
              mt="20px"
              variant="outline"
              onClick={() => {
                location.reload();
              }}
            >
              Log Out
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default UserAccount;
