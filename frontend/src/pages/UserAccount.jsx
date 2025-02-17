import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { 
  Box, Text, Heading, VStack, Divider, Button, HStack, 
  List, ListItem, ListIcon, Badge, Select, Avatar, Input 
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart, FaTruck, FaCreditCard, FaHeart, FaHeadset, FaBell, FaLock, FaUpload } from "react-icons/fa";

const UserAccount = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setProfilePic(response.data.profilePic);
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setLoading(false);
      }
    };

    if (!user?.status) {
      navigate("/login");
    } else {
      fetchUserData();
    }
  }, [user, navigate]);

  
  const handleProfilePicUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const response = await axios.post("/api/user/update-profile-pic", formData, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data"
        }
      });
      setProfilePic(response.data.profilePic);
    } catch (error) {
      console.error("Error uploading profile picture", error);
    }
  };

  return (
    <Box w="90%" m="auto" py={10} textAlign="center">
     
      <Heading fontSize="3xl" mb={5}>
        {user?.status ? `Welcome, ${user.name}!` : "Guest Account"}
      </Heading>

      <VStack spacing={3}>
        <Avatar size="xl" name={user.name} src={profilePic} />
        <Input type="file" accept="image/*" onChange={handleProfilePicUpload} />
        <Text fontSize="lg">Email: {user.email || "Not Available"}</Text>
        <Text fontSize="lg">Phone: {user.phone || "Not Provided"}</Text>
        <Button colorScheme="blue" size="sm" mt={3} onClick={() => navigate("/edit-profile")}>Edit Profile</Button>
      </VStack>

      <Divider my={6} />

      
      <Heading fontSize="2xl" mb={3}>Shopping Summary</Heading>
      <VStack spacing={4}>
        <Text fontSize="lg"><FaShoppingCart /> Items in Cart: {user?.cart?.length || 0}</Text>
        <Text fontSize="lg">Total Spent: KSH {user?.totalPrice?.toFixed(2) || 0}</Text>
      </VStack>

      <Divider my={6} />

      
      <Heading fontSize="2xl" mb={3}><FaTruck /> Order History</Heading>
      <Select 
        placeholder="Select Order to View Details"
        onChange={(e) => setSelectedOrder(user?.orders?.find(order => order.id === e.target.value))}
      >
        {user?.orders?.map(order => (
          <option key={order.id} value={order.id}>
            Order #{order.id} - {order.status}
          </option>
        ))}
      </Select>
      {selectedOrder && (
        <Box p={4} border="1px solid #ddd" borderRadius="md" mt={4}>
          <Text fontSize="lg" fontWeight="bold">Order ID: {selectedOrder.id}</Text>
          <Text>Status: <Badge colorScheme={selectedOrder.status === "Delivered" ? "green" : "yellow"}>{selectedOrder.status}</Badge></Text>
          <Text>Total: KSH {selectedOrder.totalPrice.toFixed(2)}</Text>
          <Button colorScheme="orange" mt={3} onClick={() => navigate(`/track-order/${selectedOrder.id}`)}>Track Delivery</Button>
        </Box>
      )}

      <Divider my={6} />

     
      <Heading fontSize="2xl" mb={3}><FaCreditCard /> Payment Methods</Heading>
      <Button colorScheme="blue" mt={3} onClick={() => navigate("/add-payment")}>Manage Payments</Button>

      <Divider my={6} />

     
      <Heading fontSize="2xl" mb={3}><FaHeart /> Wishlist</Heading>
      <Button colorScheme="pink" mt={3} onClick={() => navigate("/wishlist")}>View Wishlist</Button>

      <Divider my={6} />

      
      <Heading fontSize="2xl" mb={3}><FaHeadset /> Support & Returns</Heading>
      <Button colorScheme="teal" mt={3} onClick={() => navigate("/support")}>Contact Support</Button>
      <Button colorScheme="red" mt={3} ml={3} onClick={() => navigate("/returns")}>Request a Return</Button>

      <Divider my={6} />

    
      <Heading fontSize="2xl" mb={3}><FaBell /> Notifications</Heading>
      <Button colorScheme="yellow" mt={3} onClick={() => navigate("/notifications")}>View Notifications</Button>

      <Divider my={6} />

      
      <Heading fontSize="2xl" mb={3}><FaLock /> Security Settings</Heading>
      <Button colorScheme="purple" mt={3} onClick={() => navigate("/change-password")}>Change Password</Button>
      <Button colorScheme="orange" mt={3} ml={3} onClick={() => navigate("/enable-2fa")}>Enable 2FA</Button>

      <Divider my={6} />

      
      <Button colorScheme="red" mt={5} onClick={() => { logout(); navigate("/"); }}>
        Log Out
      </Button>
    </Box>
  );
};

export default UserAccount;
