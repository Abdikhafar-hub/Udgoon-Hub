import { useState, useEffect, useContext } from "react";
import { Box, Heading, Input, Button, VStack, Avatar, Spinner, Text } from "@chakra-ui/react";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5000/api/user"; // Ensure correct backend URL

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Handle profile picture upload
 

  // ✅ Handle profile picture upload
  const handleProfilePicUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("profilePic", file);
  
    const token = localStorage.getItem("token");
    console.log("Using Token for Upload:", token); // Debugging token
  
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/update-profile-pic`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setProfilePic(response.data.profilePic);
      setUser({ ...user, profilePic: response.data.profilePic }); // Update global user context
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      setError("Failed to upload profile picture.");
    } finally {
      setLoading(false);
    }
  };
  
  // ✅ Handle profile updates (name, email, phone)
  const handleProfileUpdate = async () => {
    setLoading(true);
    setError("");
  
    const token = localStorage.getItem("token");
    console.log("Using Token for Profile Update:", token); // Debugging token
  
    try {
      const response = await axios.put(
        `${API_BASE_URL}/update-profile`,
        { name, email, phone },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      setUser(response.data); // Update global user context
      alert("Profile updated successfully!");
      navigate("/useraccount");
    } catch (error) {
      console.error("Error updating profile:", error.response ? error.response.data : error.message);
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <Box w="90%" m="auto" py={10} textAlign="center">
      <Heading mb={5}>Edit Profile</Heading>

      {error && <Text color="red.500">{error}</Text>}

      <VStack spacing={4}>
        <Avatar size="xl" name={name} src={profilePic} />
        <Input type="file" accept="image/*" onChange={handleProfilePicUpload} />

        <Input 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Input 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          placeholder="Phone Number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />

        <Button colorScheme="blue" onClick={handleProfileUpdate} isLoading={loading}>
          Update Profile
        </Button>

        <Button colorScheme="gray" onClick={() => navigate("/useraccount")}>
          Cancel
        </Button>
      </VStack>
    </Box>
  );
};

export default EditProfile;
