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
  <Text fontWeight="600" fontSize={{ base: "sm", md: "lg" }} mb={2} color="white">
    {children}
  </Text>
);

export default function Footer() {
  return (
    <Box bgGradient="linear(to-r, blackAlpha.900, gray.800)" color="white" py={{ base: 4, md: 8 }}>
      <Container as={Stack} maxW="6xl" px={{ base: 3, md: 8 }}>
        
        {/* Social Icons */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 3, md: 6 }} alignItems="center">
          <VStack spacing={3} textAlign="center">
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight="600">
              Follow us for the latest fragrances
            </Text>
            <HStack spacing={{ base: 2, md: 4 }}>
              {socialLinks.map(({ icon: IconComp, link, color }, index) => (
                <Link key={index} href={link} isExternal>
                  <MotionBox
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    display="inline-block"
                  >
                    <Icon as={IconComp} boxSize={{ base: 4, md: 6 }} color={color} />
                  </MotionBox>
                </Link>
              ))}
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider my={{ base: 3, md: 5 }} />

        {/* Support & Explore (One Row on Mobile) */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 3, md: 6 }}>
          {/* Customer Support */}
          <Stack align={"flex-start"}>
            <ListHeader>Customer Support</ListHeader>
            <List spacing={1}>
              <ListItem>
                <HStack>
                  <ListIcon as={PhoneIcon} fontSize="sm" color="pink.300" />
                  <Link as={RouterLink} to="/help">Customer Service</Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={TbTruckDelivery} fontSize="sm" color="purple.300" />
                  <Link as={RouterLink} to="/help">Delivery Information</Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <ListIcon as={TbRefresh} fontSize="sm" color="purple.300" />
                  <Link as={RouterLink} to="/help">Return & Refund</Link>
                </HStack>
              </ListItem>
            </List>
          </Stack>

          {/* Explore */}
          <Stack align={"flex-start"}>
            <ListHeader>Explore</ListHeader>
            <Link as={RouterLink} to="/aboutus">About Us</Link>
            <Link as={RouterLink} to="/aboutus">New Arrivals</Link>
            <Link as={RouterLink} to="/aboutus">Best Sellers</Link>
            <Link as={RouterLink} to="/aboutus">Exclusive Scents</Link>
          </Stack>

          {/* Legal */}
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link as={RouterLink} to="/help">Privacy Policy</Link>
            <Link as={RouterLink} to="/help">Terms & Conditions</Link>
            <Link as={RouterLink} to="/help">Cookie Settings</Link>
          </Stack>

          {/* Contact */}
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Link as={RouterLink} to="/contact">Message Us</Link>
            <Link as={RouterLink} to="/contact">Free Perfume Consultations</Link>
            <Link as={RouterLink} to="/contact">Wholesale Inquiries</Link>
          </Stack>
        </SimpleGrid>

        <Divider my={{ base: 3, md: 5 }} />

        <VStack spacing={2} textAlign="center">
          <Text fontSize={{ base: "xs", md: "sm" }} opacity="0.7">
            © {new Date().getFullYear()} Udgoon Hub - Where Luxury Meets Fragrance. All rights reserved.
          </Text>
          <HStack>
            <Text fontSize={{ base: "xs", md: "sm" }}>Made with</Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="red.400">❤️</Text>
            <Text fontSize={{ base: "xs", md: "sm" }}>by</Text>
            <Link href="https://www.instagram.com/abdikhafar_issack/" isExternal color="pink.400" fontWeight="bold">
              Abdikhafar Issack
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
