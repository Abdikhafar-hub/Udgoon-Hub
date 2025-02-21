import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Select,
  Text,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  Spinner,
  Image,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import mpesaLogo from "/mpesa.png"; 

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
  
  const [isMpesaModalOpen, setIsMpesaModalOpen] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  
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

  const totalAmount = location.state?.totalPrice || 0;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountyChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      county: e.target.value,
      constituency: "",
    }));
  };

  const handleSave = () => {
    if (!formData.firstName || !formData.phoneNumber || !formData.email || !formData.county || !formData.constituency) {
      alert("Please fill all required fields.");
      return;
    }
    setIsMpesaModalOpen(true); 
  };
  

  const handlePayment = async () => {
    setIsProcessing(true);
    setErrorMessage("");

    try {
      let token = localStorage.getItem("token");

      if (!token) {
        alert("⚠️ You need to log in before making a payment.");
        navigate("/login");
        return;
      }

      const response = await axios.post(
        "https://udgoon-hub.onrender.com/api/mpesa/pay",
        { phoneNumber: mpesaNumber, totalPrice: totalAmount },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message === "Payment initiated successfully.") {
        
        setIsMpesaModalOpen(false); 
        setIsPaymentSuccess(true);  
      }
    } catch (error) {
      console.error("Payment error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "❌ Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Box w={{ base: "95%", md: "60%" }} m="auto" py={10} border="1px solid #ddd" borderRadius="8px" p={5} boxShadow="lg">
      <Text fontSize="xl" fontWeight="bold" mb={5}>1. CUSTOMER ADDRESS</Text>
      <VStack spacing={3} align="stretch">
  
 
  <HStack spacing={3} flexDirection={{ base: "column", md: "row" }}>
    <FormControl flex="1">
      <FormLabel fontSize={{ base: "sm", md: "md" }}>First Name</FormLabel>
      <Input placeholder="First Name" name="firstName" onChange={handleChange} fontSize={{ base: "sm", md: "md" }} w="full" />
    </FormControl>
    <FormControl flex="1">
      <FormLabel fontSize={{ base: "sm", md: "md" }}>Last Name</FormLabel>
      <Input placeholder="Last Name" name="lastName" onChange={handleChange} fontSize={{ base: "sm", md: "md" }} w="full" />
    </FormControl>
  </HStack>

 
  <FormControl>
    <FormLabel fontSize={{ base: "sm", md: "md" }}>Email Address</FormLabel>
    <Input placeholder="Email Address" name="email" onChange={handleChange} fontSize={{ base: "sm", md: "md" }} w="full" />
  </FormControl>

 
  <HStack spacing={3} flexDirection={{ base: "column", md: "row" }}>
    <FormControl flex="1">
      <FormLabel fontSize={{ base: "sm", md: "md" }}>Phone Number</FormLabel>
      <HStack>
        <Input value="+254" isReadOnly w="30%" fontSize={{ base: "sm", md: "md" }} />
        <Input placeholder="Phone Number" name="phoneNumber" onChange={handleChange} fontSize={{ base: "sm", md: "md" }} w="full" />
      </HStack>
    </FormControl>
  </HStack>

  <HStack spacing={3} flexDirection={{ base: "column", md: "row" }}>
    <FormControl flex="1">
      <FormLabel fontSize={{ base: "sm", md: "md" }}>County</FormLabel>
      <Select placeholder="Select County" name="county" onChange={handleCountyChange} fontSize={{ base: "sm", md: "md" }} w="full">
        {Object.keys(countiesAndConstituencies).map((county) => (
          <option key={county} value={county}>{county}</option>
        ))}
      </Select>
    </FormControl>
    <FormControl flex="1">
      <FormLabel fontSize={{ base: "sm", md: "md" }}>Constituency</FormLabel>
      <Select 
        placeholder="Select Constituency" 
        name="constituency" 
        onChange={handleChange} 
        isDisabled={!formData.county} 
        fontSize={{ base: "sm", md: "md" }} 
        w="full"
      >
        {formData.county && countiesAndConstituencies[formData.county].map((constituency) => (
          <option key={constituency} value={constituency}>{constituency}</option>
        ))}
      </Select>
    </FormControl>
  </HStack>

  
  <HStack justify="flex-end" mt={3}>
    <Button size="sm" variant="outline" onClick={() => navigate("/")}>Cancel</Button>
    <Button size="sm" colorScheme="orange" onClick={handleSave}>Save and Pay</Button>
  </HStack>

</VStack>


     
      <Modal isOpen={isMpesaModalOpen} onClose={() => setIsMpesaModalOpen(false)} isCentered>
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

      
      <Modal isOpen={isPaymentSuccess} onClose={() => navigate("/order-confirmation")} isCentered>
        <ModalOverlay />
         <ModalContent>
          <ModalHeader textAlign="center">🛍 Order Processing</ModalHeader>
            <ModalCloseButton />
              <ModalBody textAlign="center">
                  <Text fontSize="lg" fontWeight="bold" color="green.600">
                       Thank you for shopping at Udgoon Hub!
                  </Text>
                  <Text>
                    If your payment is confirmed, our team will begin processing your order.
                  </Text>
              </ModalBody>
          <ModalFooter>
               <Button colorScheme="blue" w="full" onClick={() => navigate("/order-confirmation")}>
                  Continue
               </Button>
           </ModalFooter>
       </ModalContent>
      </Modal>

    </Box>
  );
};

export default CheckoutPage;



