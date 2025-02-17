import { Box, Text, VStack, HStack, Divider, Link } from "@chakra-ui/react";
import { useState } from "react";

function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState("Delivery");

  
  const categories = [
    { name: "Delivery", topics: ["How can I track my delivery?", "What if I am not available to receive my delivery?", "What do I do if my delivery is delayed?"] },
    { name: "Returns & Refunds", topics: ["What is Udgoon Hub's return policy?"] },
    { name: "Account", topics: ["How do I reset my password?"] },
    { name: "Payments", topics: ["How to pay via M-Pesa?", "Are there additional charges for M-Pesa transactions?", "What happens if my payment fails?"] },
  ];

  
  const helpTopics = {
    "How can I track my delivery?": (
      <VStack align="start">
        <Text>To track your delivery on Udgoon Hub, follow these steps:</Text>
        <Text>1. Log in to your account.</Text>
        <Text>2. Click on the "My Account" button and select "ORDERS".</Text>
        <Text>3. Locate the order and click "View Details".</Text>
        <Text>4. If the status is "Shipped", click "Track Package".</Text>
        <Text>5. This will take you to the tracking page where you can view updates.</Text>
        <Text>6. If you need assistance, call us at <b>0717219448</b>.</Text>
      </VStack>
    ),

    "What if I am not available to receive my delivery?": (
      <VStack align="start">
        <Text>If you are unavailable to receive your delivery, you have the following options:</Text>
        <Text>✔ Arrange for someone else to receive it by providing their details to the delivery agent.</Text>
        <Text>✔ Contact the delivery agent to reschedule a convenient time.</Text>
        <Text>✔ If no other options are available, call our support at <b>0717219448</b>.</Text>
        <Text>⚠️ Note: You cannot change the delivery address once the order is placed. Udgoon Hub will attempt delivery twice before canceling.</Text>
      </VStack>
    ),

    "What do I do if my delivery is delayed?": (
      <VStack align="start">
        <Text>If your order has not arrived within the estimated time frame:</Text>
        <Text>✔ Check the order details in your account.</Text>
        <Text>✔ Monitor SMS, email, and app notifications for updates.</Text>
        <Text>✔ Contact the delivery agent using the provided details.</Text>
        <Text>✔ If issues persist, reach our customer service at <b>0717219448</b>.</Text>
      </VStack>
    ),

    "What is Udgoon Hub's return policy?": (
      <VStack align="start">
        <Text>Udgoon Hub accepts returns within **7 days** of delivery.</Text>
        <Text>✔ The product must be in its **original condition** with all accessories and packaging intact.</Text>
        <Text>✔ Returns for personal hygiene items and customized products are **not accepted**.</Text>
        <Text>✔ A delivery representative will arrange a pick-up within **1-2 business days**.</Text>
        <Text>✔ For pick-up stations, drop off the returned package within **3 days**.</Text>
      </VStack>
    ),

    "How do I reset my password?": (
      <VStack align="start">
        <Text>Follow these steps to reset your password:</Text>
        <Text>1. Go to the Udgoon Hub website and click “Sign in”.</Text>
        <Text>2. Click on “Forgot Password”.</Text>
        <Text>3. Enter your registered email and check for a **4-digit verification code**.</Text>
        <Text>4. Enter the code on the Udgoon Hub platform.</Text>
        <Text>5. Submit a new password and confirm.</Text>
      </VStack>
    ),

    "How to pay via M-Pesa?": (
      <VStack align="start">
        <Text>To complete payment using M-Pesa:</Text>
        <Text>✔ Select **M-Pesa** as your payment method at checkout.</Text>
        <Text>✔ Enter your **M-Pesa phone number** and follow the instructions.</Text>
        <Text>✔ Confirm the **STK push request** on your phone.</Text>
        <Text>✔ Once the payment is successful, your order will be processed.</Text>
      </VStack>
    ),

    "Are there additional charges for M-Pesa transactions?": (
      <VStack align="start">
        <Text>No, Udgoon Hub does not charge extra fees for M-Pesa transactions.</Text>
        <Text>However, your mobile network provider may apply standard M-Pesa transaction fees.</Text>
      </VStack>
    ),

    "What happens if my payment fails?": (
      <VStack align="start">
        <Text>If your payment fails, follow these steps:</Text>
        <Text>✔ Ensure you have sufficient funds in your M-Pesa account.</Text>
        <Text>✔ Check for network interruptions or delays.</Text>
        <Text>✔ If money was deducted but the payment did not reflect, contact **M-Pesa support** and our customer service at <b>0717219448</b>.</Text>
      </VStack>
    ),
  };

  return (
    <Box display="flex" h="100vh" p={5}>
     
      <Box w="250px" borderRight="1px solid #e2e8f0" p={4}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>Help Center</Text>
        {categories.map((category) => (
          <Text
            key={category.name}
            fontSize="sm"
            fontWeight={selectedCategory === category.name ? "bold" : "normal"}
            p={2}
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </Text>
        ))}
      </Box>

      
      <Box flex="1" p={5}>
        <Text fontSize="xl" fontWeight="bold">{selectedCategory}</Text>
        <Divider my={3} />
        <VStack align="start" spacing={4}>
          {categories.find((cat) => cat.name === selectedCategory)?.topics.map((topic) => (
            <Box key={topic} w="100%">
              <HStack justify="space-between">
                <Text fontSize="md" fontWeight="bold">{topic}</Text>
              </HStack>
              <Text fontSize="sm" color="gray.600" mt={1}>
                {helpTopics[topic]}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default HelpCenter;
