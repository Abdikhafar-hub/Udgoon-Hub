import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Box, Text, Heading, VStack, Divider, Button, HStack, Avatar, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaTruck, FaCreditCard, FaHeart, FaLock, FaSignOutAlt } from "react-icons/fa";

const UserAccount = () => {
  const { user, logout, wishlist } = useContext(UserContext);
  const navigate = useNavigate();

  console.log("🔍 User Data:", user); 

  return (
    <Container maxW="container.md" py={10}>
      <Box border="1px solid #ddd" borderRadius="lg" p={6} boxShadow="lg">
        <Heading fontSize="2xl" textAlign="center" mb={5}>
          {user?.status ? `Welcome, ${user?.name || "User"}!` : "Guest Account"}
        </Heading>

       
        <VStack spacing={4}>
          <Avatar size="2xl" name={user?.name} src={user?.profilePic || ""} />
          <Text fontSize="lg">📧 Email: {user?.email || "Not Available"}</Text>
          <Text fontSize="lg">📞 Phone: {user?.phone || "Not Provided"}</Text>
          <Button colorScheme="blue" size="sm" mt={3} onClick={() => navigate("/edit-profile")}>
            Edit Profile
          </Button>
        </VStack>

        <Divider my={6} />

        
        <Box p={4} border="1px solid #ddd" borderRadius="md">
          <Heading fontSize="xl" mb={3}>
            <HStack>
              <FaTruck />
              <Text>Order History</Text>
            </HStack>
          </Heading>
          {user?.orders?.length > 0 ? (
            <VStack align="start">
              {user.orders.slice(0, 3).map((order) => (
                <Text key={order.id}>Order #{order.id} - {order.status}</Text>
              ))}
              <Button colorScheme="orange" mt={3} onClick={() => navigate("/orders")}>View All Orders</Button>
            </VStack>
          ) : (
            <Text>No orders found.</Text>
          )}
        </Box>

        <Divider my={6} />

       
        <Box p={4} border="1px solid #ddd" borderRadius="md">
          <Heading fontSize="xl" mb={3}>
            <HStack>
              <FaCreditCard />
              <Text>Payments</Text>
            </HStack>
          </Heading>
          {user?.payments?.length > 0 ? (
            <VStack align="start">
              {user.payments.slice(0, 3).map((payment) => (
                <Text key={payment.id}>Paid KSH {payment.amount}</Text>
              ))}
              <Button colorScheme="blue" mt={3} onClick={() => navigate("/payments")}>View Payment History</Button>
            </VStack>
          ) : (
            <Text>No payment history found.</Text>
          )}
        </Box>

        <Divider my={6} />

       
        <Box p={4} border="1px solid #ddd" borderRadius="md">
          <Heading fontSize="xl" mb={3}>
            <HStack>
              <FaHeart />
              <Text>Wishlist</Text>
            </HStack>
          </Heading>
          {wishlist?.length > 0 ? (
            <VStack align="start">
              {wishlist.slice(0, 3).map((item) => (
                <Text key={item.id}>{item.name}</Text>
              ))}
              <Button colorScheme="pink" mt={3} onClick={() => navigate("/wishlist")}>View Full Wishlist</Button>
            </VStack>
          ) : (
            <Text>No wishlist items found.</Text>
          )}
        </Box>

        <Divider my={6} />

       
        <Box p={4} border="1px solid #ddd" borderRadius="md">
          <Heading fontSize="xl" mb={3}>
            <HStack>
              <FaLock />
              <Text>Security Settings</Text>
            </HStack>
          </Heading>
          <Button colorScheme="purple" mt={3} onClick={() => navigate("/change-password")}>Change Password</Button>
        </Box>

        <Divider my={6} />

        
        <Button colorScheme="red" leftIcon={<FaSignOutAlt />} mt={5} onClick={() => { logout(); navigate("/"); }}>
          Log Out
        </Button>
      </Box>
    </Container>
  );
};

export default UserAccount;
