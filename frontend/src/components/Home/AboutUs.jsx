import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AboutUs = () => {
  return (
    <Container maxW="container.md" py={12}>
      
      <MotionBox
        bgGradient="linear(to-r, white, #fdf6e3)" 
        p={10}
        borderRadius="lg"
        boxShadow="lg"
        textAlign="center"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        <VStack spacing={4}>
          <Heading
            fontSize="4xl"
            fontWeight="bold"
            color="goldenrod"
            fontFamily="Playfair Display"
            textDecoration="underline"
            textUnderlineOffset={6}
          >
            ✨ Welcome to Udgoon Hub ✨
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Your <strong>one-stop shop</strong> for  
            <span style={{ color: "goldenrod" }}> premium, authentic, and luxurious</span>  
            perfumes – delivered to your doorstep!
          </Text>
        </VStack>

        
        <VStack spacing={6} align="center" mt={10}>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            fontFamily="Merriweather"
            fontStyle="italic"
            textDecoration="underline"
            textUnderlineOffset={6}
          >
            🌟 Why Choose Us?
          </Heading>
          <Text fontSize="md" color="gray.600">
            We are the <strong>leading destination</strong> for  
            <span style={{ color: "goldenrod" }}> luxury fragrances</span>,  
            offering an <strong>unparalleled shopping experience</strong>  
            that enhances confidence and personal style.
          </Text>

          
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            fontStyle="italic"
            textDecoration="underline"
            textUnderlineOffset={6}
          >
            🎯 Our Mission
          </Heading>
          <Text fontSize="md" color="gray.600">
            At <strong>Udgoon Hub</strong>, we bring you the finest,  
            <span style={{ color: "goldenrod" }}> 100% authentic perfumes</span>  
            at unbeatable prices.  
            We ensure a <strong>seamless shopping experience</strong>  
            with <span style={{ color: "goldenrod" }}> fast delivery</span>,  
            secure payments, and world-class customer support.
          </Text>

          
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            fontStyle="italic"
            textDecoration="underline"
            textUnderlineOffset={6}
          >
            🌸 Elevate Your Scent Game
          </Heading>
          <Text fontSize="md" color="gray.600">
            Find your <strong>signature scent</strong>, gift a loved one,  
            or explore <span style={{ color: "goldenrod" }}>exclusive fragrances</span> –  
            all in one place.  
            <br />
            <strong>Shop now</strong> & let your fragrance make a statement! ✨
          </Text>
        </VStack>
      </MotionBox>
    </Container>
  );
};

export default AboutUs;
