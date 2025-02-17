import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AboutUs = () => {
  return (
    <Container maxW="container.md" py={12}>
      {/* ✅ Animated Card */}
      <MotionBox
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        textAlign="center"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ✅ Header Section */}
        <VStack spacing={4}>
          <Heading
            fontSize="4xl"
            fontWeight="bold"
            color="black"
            fontStyle="italic"
            textDecoration="underline"
            textUnderlineOffset={6}
          >
            Welcome to Udgoon Hub
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Your <strong>one-stop shop</strong> for <strong>premium perfumes</strong>,  
            <strong>Authentic</strong>, <strong>luxurious</strong>, and delivered to your doorstep!
          </Text>
        </VStack>

        {/* ✅ Why Choose Us Section */}
        <VStack spacing={6} align="center" mt={10}>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            fontStyle="italic"
            textDecoration="underline"
            textUnderlineOffset={6}
          >
            Why Choose Us
          </Heading>
          <Text fontSize="md" color="gray.600">
            We are the <strong>leading destination</strong> for <strong>luxury fragrances</strong>,  
            offering an <strong>unparalleled shopping experience</strong> that enhances confidence  
            and personal style.
          </Text>

          {/* ✅ Mission Section */}
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            fontStyle="italic"
            textDecoration="underline"
            textUnderlineOffset={6}
          >
            Our Mission
          </Heading>
          <Text fontSize="md" color="gray.600">
            At <strong>Udgoon Hub</strong>, our mission is to bring you the finest,  
            <strong>100% authentic perfumes</strong> at the best prices.  
            We are committed to ensuring a <strong>seamless shopping experience</strong> with  
            <strong>fast delivery</strong>, secure payments, and top-notch customer service.
          </Text>

          {/* ✅ Closing Statement */}
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            fontStyle="italic"
            textDecoration="underline"
            textUnderlineOffset={6}
          >
            Elevate Your Scent Game
          </Heading>
          <Text fontSize="md" color="gray.600">
            Find your <strong>signature scent</strong>, gift a loved one, or explore  
            <strong> exclusive fragrances</strong> – all in one place.  
            <br />
            <strong>Shop now</strong> & let your fragrance make a statement!
          </Text>
        </VStack>
      </MotionBox>
    </Container>
  );
};

export default AboutUs;
