import { useEffect, useState } from "react";
import { Box, Container, Heading, Text, VStack, HStack, Icon, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Container maxW="7xl" py={10}>
      <Flex direction={{ base: "column", md: "row" }} gap={10} alignItems="start">
       
        <Box flex={1} bg="white" p={8} rounded="lg" shadow="md" color="black">
          <Text bg="gray.200" color="black" px={2} py={1} rounded="md" fontSize="sm" display="inline-block">Contact</Text>
          <Heading size="lg" mt={3} color="black">Contact Us</Heading>
          <Text color="gray.600" mb={5}>Get in touch with us</Text>
          <VStack spacing={4} align="start">
            <HStack>
              <Icon as={FaMapMarkerAlt} color="black" />
              <Text>Business Bay Square Mall, First Floor, Eastleigh, Nairobi Kenya</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="black" />
              <Text>udgoonhub@gmail.com</Text>
            </HStack>
            <HStack>
              <Icon as={FaPhone} color="black" />
              <Text>0717219448</Text>
            </HStack>
            <HStack>
              <Icon as={FaWhatsapp} color="black" />
              <Text>0717219448</Text>
            </HStack>
          </VStack>
        </Box>
        
        
        <Box flex={1} bg="white" p={6} shadow="lg" rounded="lg">
          <VStack spacing={4}>
            <Input placeholder="Your First Name" borderColor="gray.400" focusBorderColor="black" color="black" bg="white" />
            <Input placeholder="Your Last Name" borderColor="gray.400" focusBorderColor="black" color="black" bg="white" />
            <Input placeholder="Your Email" type="email" borderColor="gray.400" focusBorderColor="black" color="black" bg="white" />
            <Input placeholder="Your Phone Number" type="tel" borderColor="gray.400" focusBorderColor="black" color="black" bg="white" />
            <Textarea placeholder="Your Message" borderColor="gray.400" focusBorderColor="black" color="black" bg="white" h={20} />
            <Button bg="black" color="white" _hover={{ bg: "gray.700" }} w="full">Send Message</Button>
          </VStack>
        </Box>
      </Flex>
      
      
      {isClient && (
        <Box 
        w="full" 
        maxW={{ base: "100%", md: "none" }}  
        mt={{ base: 6, md: 12 }}  
        borderRadius="lg" 
        overflow="hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.82308113028!2d36.843964776263675!3d-1.2797756356217265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170b1905d029%3A0x34d92f603e5aff18!2sBusiness%20Bay%20Square%20(BBS)%20Mall!5e0!3m2!1sen!2ske!4v1739263553358!5m2!1sen!2ske"
          width="100%"
          height={window.innerWidth >= 768 ? "400px" : "250px"} 
          style={{
            border: 0,
            minHeight: "250px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      
      
      )}
    </Container>
  );
};

export default Contact;


