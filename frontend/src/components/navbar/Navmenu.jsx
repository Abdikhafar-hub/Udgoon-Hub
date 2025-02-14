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
      <Box ref={btnRef} onClick={onOpen}>
        <RxHamburgerMenu />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AiFillHome />
          </DrawerHeader>
          <DrawerBody>
            <Link to="/productpage"><Button>Perfume Brands</Button></Link>
            <Link to="/productpage"><Button>Men's Fragrances</Button></Link>
            <Link to="/productpage"><Button>Women's Fragrances</Button></Link>
            <Link to="/productpage"><Button>Unisex Scents</Button></Link>
            <Link to="/productpage"><Button>Luxury Perfumes</Button></Link>
            <Link to="/productpage"><Button>Body Mists</Button></Link>
            <Link to="/productpage"><Button>Fragrance Oils</Button></Link>
            <Link to="/productpage"><Button>New Arrivals</Button></Link>
            <Link to="/productpage"><Button>Best Sellers</Button></Link>
            <Link to="/productpage"><Button>Perfume Blog</Button></Link>
          </DrawerBody>

          <DrawerFooter bg="#f9f9f9">
            <Flex
              mb="50px"
              w="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                w="30px"
                h="30px"
                border="1px solid"
                borderRadius="100%"
                src=""
              />
              <Text textDecor="underline">Change Language</Text>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navmenu;
