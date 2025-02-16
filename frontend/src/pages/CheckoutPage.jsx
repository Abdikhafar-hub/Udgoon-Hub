import { useState } from "react";
import {
  Box, Button, Input, Select, Text, VStack, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, 
  ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Spinner, Image
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import mpesaLogo from "../assets/mpesa.png"; // Import M-Pesa logo

const countiesAndConstituencies = {
  "Nairobi": ["Westlands", "Starehe", "Dagoretti North", "Dagoretti South", "Embakasi North", "Embakasi South"],
  "Mombasa": ["Changamwe", "Jomvu", "Kisauni", "Nyali", "Likoni", "Mvita"],
  // Add all counties...
};

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access passed state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    county: "",
    constituency: "",
  });

  const [mpesaNumber, setMpesaNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Retrieve total amount passed from CartPage
  const totalAmount = location.state?.totalPrice || 0;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountyChange = (e) => {
    const selectedCounty = e.target.value;
    setFormData({ ...formData, county: selectedCounty, constituency: "" });
  };

  const handleSave = () => {
    if (!formData.firstName || !formData.phoneNumber || !formData.county || !formData.constituency) {
      alert("Please fill all required fields.");
      return;
    }
    onOpen(); // Open the M-Pesa modal
  };

  const handlePayment = () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment request sent for KSH ${totalAmount}. Complete the transaction on your phone.`);
      navigate("/order-confirmation");
    }, 4000); // Simulate a 4-sec processing delay
  };

  return (
    <Box w={{ base: "95%", md: "60%" }} m="auto" py={10} border="1px solid #ddd" borderRadius="8px" p={5} boxShadow="lg">
      <Text fontSize="xl" fontWeight="bold" mb={5}>1. CUSTOMER ADDRESS</Text>

      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name" name="firstName" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" name="lastName" onChange={handleChange} />
          </FormControl>
        </HStack>

        <HStack spacing={4}>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <HStack>
              <Input value="+254" isReadOnly w="25%" />
              <Input placeholder="Phone Number" name="phoneNumber" onChange={handleChange} />
            </HStack>
          </FormControl>
        </HStack>

        <HStack spacing={4}>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <HStack>
              
              <Input placeholder="Email Address" name="emailaddress" onChange={handleChange} />
            </HStack>
          </FormControl>
        </HStack>

        <HStack spacing={4}>
          <FormControl>
            <FormLabel>Region (County)</FormLabel>
            <Select placeholder="Select County" name="county" onChange={handleCountyChange}>
              {Object.keys(countiesAndConstituencies).map((county) => (
                <option key={county} value={county}>{county}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>City (Constituency)</FormLabel>
            <Select 
              placeholder="Select Constituency" 
              name="constituency" 
              onChange={handleChange} 
              isDisabled={!formData.county}
            >
              {formData.county && countiesAndConstituencies[formData.county].map((constituency) => (
                <option key={constituency} value={constituency}>{constituency}</option>
              ))}
            </Select>
          </FormControl>
        </HStack>

        <HStack justify="flex-end" mt={4}>
          <Button variant="outline" onClick={() => navigate("/")}>Cancel</Button>
          <Button colorScheme="orange" onClick={handleSave}>Save and Pay</Button>
        </HStack>
      </VStack>

      {/* M-Pesa Payment Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <Image src={mpesaLogo} alt="M-Pesa Logo" boxSize="80px" mx="auto" />
            Enter Phone Number to Pay
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Text fontSize="lg" fontWeight="bold" color="green.600">
                Total Amount: KSH {totalAmount.toFixed(2)}
              </Text>
              <Input 
                placeholder="Enter M-Pesa Number" 
                value={mpesaNumber} 
                onChange={(e) => setMpesaNumber(e.target.value)} 
                isDisabled={isProcessing}
              />
              {!isProcessing ? (
                <Button colorScheme="green" w="full" onClick={handlePayment}>Pay</Button>
              ) : (
                <VStack spacing={2}>
                  <Spinner size="xl" color="green.500" />
                  <Text fontSize="md" fontWeight="bold">Processing Payment...</Text>
                </VStack>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CheckoutPage;
