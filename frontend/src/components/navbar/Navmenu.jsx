import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navmenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // ✅ Function to Close Menu When Clicking a Link
  const handleCloseMenu = () => {
    onClose(); // Closes the menu after clicking a link
  };

  return (
    <>
      {/* ✅ Hamburger Icon (Opens Menu) */}
      <Box ref={btnRef} onClick={onOpen} cursor="pointer">
        <RxHamburgerMenu size={24} />
      </Box>

      {/* ✅ Sidebar Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AiFillHome size={24} />
          </DrawerHeader>

          {/* ✅ Menu Links (Automatically Closes on Click) */}
          <DrawerBody>
          <Link to="/aboutus" onClick={handleCloseMenu}>
              <Button w="100%" mb={2}>AboutUs</Button>
            </Link>
            <Link to="/trending" onClick={handleCloseMenu}>
              <Button w="100%" mb={2}>Trending</Button>
            </Link>
            <Link to="/testimonials" onClick={handleCloseMenu}>
              <Button w="100%" mb={2}>Testimonials</Button>
            </Link>
            <Link to="/promo" onClick={handleCloseMenu}>
              <Button w="100%" mb={2}>Promotions</Button>
            </Link>
            <Link to="/products" onClick={handleCloseMenu}>
              <Button w="100%" mb={2}>Products</Button>
            </Link>
            <Link to="/contact" onClick={handleCloseMenu}>
              <Button w="100%" mb={2}>Contact Us</Button>
            </Link>
          </DrawerBody>

          {/* ✅ Footer Section */}
          <DrawerFooter bg="#f9f9f9">
            <Flex mb="50px" w="100%" alignItems="center" justifyContent="space-between">
              <Image w="30px" h="30px" border="1px solid" borderRadius="100%" src="" />
              <Text textDecor="underline">Change Language</Text>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navmenu;
