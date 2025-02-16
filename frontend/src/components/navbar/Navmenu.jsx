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
} from "@chakra-ui/react";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navmenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box ref={btnRef} onClick={onOpen} cursor="pointer">
        <RxHamburgerMenu size={24} />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AiFillHome size={24} />
          </DrawerHeader>
          <DrawerBody>
            <Link to="/products"><Button>All Perfumes</Button></Link>
            <Link to="/products?category=men"><Button>Men's Fragrances</Button></Link>
            <Link to="/products?category=women"><Button>Women's Fragrances</Button></Link>
            <Link to="/products?category=unisex"><Button>Unisex Scents</Button></Link>
            <Link to="/products?category=luxury"><Button>Luxury Perfumes</Button></Link>
            <Link to="/products?category=mists"><Button>Body Mists</Button></Link>
            <Link to="/products?category=oils"><Button>Fragrance Oils</Button></Link>
            <Link to="/products?new=true"><Button>New Arrivals</Button></Link>
            <Link to="/products?bestseller=true"><Button>Best Sellers</Button></Link>
            <Link to="/blog"><Button>Perfume Blog</Button></Link>
          </DrawerBody>

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
