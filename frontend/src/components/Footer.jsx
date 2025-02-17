import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  HStack,
  Icon,
  VStack,
  Divider,
  ListItem,
  ListIcon,
  List,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom"; 
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { PhoneIcon } from "@chakra-ui/icons";
import { TbTruckDelivery, TbRefresh, TbHelp } from "react-icons/tb";
import { MdGpsFixed } from "react-icons/md";


const MotionBox = motion(Box);


const socialLinks = [
  { icon: FaFacebook, link: "https://web.facebook.com/abdikhafar.issack.9", color: "blue.500" },
  { icon: FaTwitter, link: "https://x.com/AbdikhafarI", color: "cyan.400" },
  { icon: FaInstagram, link: "https://www.instagram.com/abdikhafar_issack/", color: "pink.400" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/abdikhafar-issack/", color: "blue.600" },
  { icon: FaEnvelope, link: "mailto:abdikhafarissack@gmail.com", color: "gray.300" },
];

const ListHeader = ({ children }) => (
  <Text fontWeight="600" fontSize="lg" mb={2} color="white">
    {children}
  </Text>
);

export default function Footer() {
  return (
    <Box bgGradient="linear(to-r, blackAlpha.900, gray.800)" color="white">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacing={8} alignItems="center">
          
          <VStack spacing={4} textAlign="center">
            <Text fontSize="lg" fontWeight="600">
              Follow us for the latest fragrances
            </Text>
            <HStack spacing={5}>
              {socialLinks.map(({ icon: IconComp, link, color }, index) => (
                <Link key={index} href={link} isExternal>
                  <MotionBox
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    display="inline-block"
                  >
                    <Icon as={IconComp} boxSize={7} color={color} />
                  </MotionBox>
                </Link>
              ))}
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider my={6} />

        
        <SimpleGrid templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr 1fr" }} spacing={8}>
          
          <Stack align={"flex-start"}>
            <ListHeader>Customer Support</ListHeader>
            <List spacing={2}>
              <ListItem>
                <HStack>
                  <ListIcon as={PhoneIcon} fontSize="md" color="pink.300" />
                  <Link as={RouterLink} to="/help">Customer Service</Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={TbTruckDelivery} fontSize="md" color="purple.300" />
                  <Link as={RouterLink} to="/help">Delivery Information</Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={TbRefresh} fontSize="md" color="purple.300" />
                  <Link as={RouterLink} to="/help">Return & Refund</Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={TbHelp} fontSize="md" color="pink.300" />
                  <Link as={RouterLink} to="/help">Help Center</Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={MdGpsFixed} fontSize="md" color="pink.300" />
                  <Link as={RouterLink} to="/help">Track My Order</Link>
                </HStack>
              </ListItem>
            </List>
          </Stack>

          
          <Stack align={"flex-start"}>
            <ListHeader>Explore</ListHeader>
            <Link as={RouterLink} to="/aboutus">About Us</Link>
            <Link as={RouterLink} to="/aboutus">New Arrivals</Link>
            <Link as={RouterLink} to="/aboutus">Best Sellers</Link>
            <Link as={RouterLink} to="/aboutus">Exclusive Scents</Link>
            <Link as={RouterLink} to="/aboutus">Gift Sets</Link>
          </Stack>

          
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link as={RouterLink} to="/help">Privacy Policy</Link>
            <Link as={RouterLink} to="/help">Terms & Conditions</Link>
            <Link as={RouterLink} to="/help">Cookie Settings</Link>
          </Stack>

          
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Link as={RouterLink} to="/contact">Message Us</Link>
            <Link as={RouterLink} to="/contact">Free Perfume Consultations</Link>
            <Link as={RouterLink} to="/contact">Wholesale Inquiries</Link>
          </Stack>
        </SimpleGrid>

        <Divider my={6} />

        
        <Text textAlign="center" fontSize="sm" opacity="0.7">
          © {new Date().getFullYear()} Udgoon Hub - Where Luxury Meets Fragrance. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
