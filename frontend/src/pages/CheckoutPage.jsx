import { useState } from "react";
import {
  Box, Button, Input, Select, Text, VStack, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, 
  ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Spinner, Image
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import mpesaLogo from "../assets/mpesa.png"; // Ensure M-Pesa logo is in assets

const countiesAndConstituencies = {
    "Baringo": ["Baringo Central", "Baringo North", "Baringo South", "Eldama Ravine", "Mogotio", "Tiaty"],
    "Bomet": ["Bomet Central", "Bomet East", "Chepalungu", "Konoin", "Sotik"],
    "Bungoma": ["Bumula", "Kabuchai", "Kanduyi", "Kimilili", "Mt. Elgon", "Sirisia", "Tongaren", "Webuye East", "Webuye West"],
    "Busia": ["Budalangi", "Butula", "Funyula", "Matayos", "Nambale", "Teso North", "Teso South"],
    "Elgeyo Marakwet": ["Keiyo North", "Keiyo South", "Marakwet East", "Marakwet West"],
    "Embu": ["Manyatta", "Mbeere North", "Mbeere South", "Runyenjes"],
    "Garissa": ["Balambala", "Dadaab", "Fafi", "Garissa Township", "Ijara", "Lagdera"],
    "Homa Bay": ["Homa Bay Town", "Kabondo Kasipul", "Karachuonyo", "Kasipul", "Mbita", "Ndhiwa", "Rangwe", "Suba"],
    "Isiolo": ["Isiolo North", "Isiolo South"],
    "Kajiado": ["Kajiado Central", "Kajiado East", "Kajiado North", "Kajiado South", "Kajiado West"],
    "Kakamega": ["Butere", "Ikolomani", "Khwisero", "Lugari", "Lurambi", "Malava", "Matungu", "Mumias East", "Mumias West", "Navakholo", "Shinyalu"],
    "Kericho": ["Ainamoi", "Belgut", "Bureti", "Kipkelion East", "Kipkelion West", "Sigowet/Soin"],
    "Kiambu": ["Gatundu North", "Gatundu South", "Githunguri", "Juja", "Kabete", "Kiambaa", "Kiambu Town", "Kikuyu", "Limuru", "Lari", "Ruiru", "Thika Town"],
    "Kilifi": ["Ganze", "Kaloleni", "Kilifi North", "Kilifi South", "Magarini", "Malindi", "Rabai"],
    "Kirinyaga": ["Gichugu", "Kirinyaga Central", "Kirinyaga East", "Mwea"],
    "Kisii": ["Bobasi", "Bomachoge Borabu", "Bomachoge Chache", "Kitutu Chache North", "Kitutu Chache South", "Nyaribari Chache", "Nyaribari Masaba", "South Mugirango"],
    "Kisumu": ["Kisumu Central", "Kisumu East", "Kisumu West", "Muhoroni", "Nyakach", "Nyando", "Seme"],
    "Kitui": ["Kitui Central", "Kitui East", "Kitui Rural", "Kitui South", "Kitui West", "Mwingi Central", "Mwingi North", "Mwingi West"],
    "Kwale": ["Kinango", "Lunga Lunga", "Matuga", "Msambweni"],
    "Laikipia": ["Laikipia East", "Laikipia North", "Laikipia West"],
    "Lamu": ["Lamu East", "Lamu West"],
    "Machakos": ["Kathiani", "Machakos Town", "Masinga", "Matungulu", "Mavoko", "Mwala", "Yatta"],
    "Makueni": ["Kaiti", "Kibwezi East", "Kibwezi West", "Kilome", "Makueni", "Mbooni"],
    "Mandera": ["Banisa", "Lafey", "Mandera East", "Mandera North", "Mandera South", "Mandera West"],
    "Marsabit": ["Laisamis", "Moyale", "North Horr", "Saku"],
    "Meru": ["Buuri", "Igembe Central", "Igembe North", "Igembe South", "North Imenti", "South Imenti", "Tigania East", "Tigania West"],
    "Migori": ["Awendo", "Kuria East", "Kuria West", "Nyatike", "Rongo", "Suna East", "Suna West", "Uriri"],
    "Mombasa": ["Changamwe", "Jomvu", "Kisauni", "Nyali", "Likoni", "Mvita"],
    "Murang'a": ["Gatanga", "Kahuro", "Kandara", "Kangema", "Kigumo", "Kiharu", "Mathioya", "Maragua"],
    "Nairobi": ["Dagoretti North", "Dagoretti South", "Embakasi Central", "Embakasi East", "Embakasi North", "Embakasi South", "Embakasi West", "Kamukunji", "Kasarani", "Kibra", "Lang'ata", "Makadara", "Mathare", "Roysambu", "Ruaraka", "Starehe", "Westlands"],
    "Nakuru": ["Bahati", "Gilgil", "Kuresoi North", "Kuresoi South", "Molo", "Naivasha", "Nakuru Town East", "Nakuru Town West", "Njoro", "Rongai", "Subukia"],
    "Nandi": ["Aldai", "Chesumei", "Emgwen", "Mosop", "Nandi Hills", "Tinderet"],
    "Narok": ["Emurua Dikirr", "Kilgoris", "Narok East", "Narok North", "Narok South", "Narok West"],
    "Nyamira": ["Borabu", "Kitutu Masaba", "North Mugirango", "West Mugirango"],
    "Nyandarua": ["Kinangop", "Kipipiri", "Ndaragwa", "Ol Jorok", "Ol Kalou"],
    "Nyeri": ["Mathira", "Mukurweini", "Nyeri Town", "Othaya", "Tetu"],
    "Samburu": ["Samburu East", "Samburu North", "Samburu West"],
    "Siaya": ["Alego Usonga", "Bondo", "Gem", "Rarieda", "Ugenya", "Ugunja"],
    "Taita Taveta": ["Mwatate", "Taveta", "Voi", "Wundanyi"],
    "Tana River": ["Bura", "Galole", "Garsen"],
    "Tharaka Nithi": ["Chuka/Igambang'ombe", "Maara", "Tharaka"],
    "Trans Nzoia": ["Cherangany", "Endebess", "Kiminini", "Kwanza", "Saboti"],
    "Turkana": ["Loima", "Turkana Central", "Turkana East", "Turkana North", "Turkana South", "Turkana West"],
    "Uasin Gishu": ["Ainabkoi", "Kapseret", "Kesses", "Moiben", "Soy", "Turbo"],
    "Vihiga": ["Emuhaya", "Hamisi", "Luanda", "Sabatia", "Vihiga"],
    "Wajir": ["Eldas", "Tarbaj", "Wajir East", "Wajir North", "Wajir South", "Wajir West"],
    "West Pokot": ["Kapenguria", "Kacheliba", "Pokot South", "Sigor"]
  };

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    county: "",
    constituency: "",
  });

  const [mpesaNumber, setMpesaNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ Get total amount from Cart Page
  const totalAmount = location.state?.totalPrice || 0;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountyChange = (e) => {
    const selectedCounty = e.target.value;
    setFormData({ ...formData, county: selectedCounty, constituency: "" });
  };

  const handleSave = () => {
    if (!formData.firstName || !formData.phoneNumber || !formData.email || !formData.county || !formData.constituency) {
      alert("Please fill all required fields.");
      return;
    }
    onOpen(); // Open M-Pesa modal
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    setErrorMessage("");

    try {
      const token = localStorage.getItem("token"); // Get JWT token from local storage
      if (!token) {
        setErrorMessage("You need to log in before making a payment.");
        setIsProcessing(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/mpesa/pay",
        { phoneNumber: mpesaNumber, totalPrice: totalAmount },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message === "Payment initiated successfully.") {
        alert("✅ Payment request sent! Check your M-Pesa and enter your PIN.");
        navigate("/order-confirmation");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "❌ Payment failed. Please try again.");
      console.error("Payment error:", error.response?.data || error.message);
    } finally {
      setIsProcessing(false);
    }
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

        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input placeholder="Email Address" name="email" onChange={handleChange} />
        </FormControl>

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
            <FormLabel>County</FormLabel>
            <Select placeholder="Select County" name="county" onChange={handleCountyChange}>
              {Object.keys(countiesAndConstituencies).map((county) => (
                <option key={county} value={county}>{county}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Constituency</FormLabel>
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
              <Input placeholder="Enter M-Pesa Number" value={mpesaNumber} onChange={(e) => setMpesaNumber(e.target.value)} />
              {errorMessage && <Text color="red.500">{errorMessage}</Text>}
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
