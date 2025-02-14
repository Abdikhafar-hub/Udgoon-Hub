import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Text,
  SimpleGrid,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";

import NavStyle from "../navbar.module.css";

function Blog() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">
          Blog
        </Box>
      </PopoverTrigger>
      <PopoverContent w="80vw">
        <PopoverArrow />
        <PopoverBody bg=" #f5f3f3" p="25px">
          <SimpleGrid gap="40px" columns={5}>
            <Box bg="white" className={NavStyle.shadowHover} p="10px">
              <Image w="100%" src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739125802/mdqdpzov9brquam6huec.png" />
              <Text py="5px" textAlign="center">The Science Behind Perfume: How Fragrances Are Created.</Text>
              <Link href="https://the-science-behind-perfume.hashnode.dev/the-science-behind-perfume-how-fragrances-are-created" color="blue.500" textAlign="center" display="block">
                Read More
              </Link>
            </Box>

            <Box bg="white" className={NavStyle.shadowHover} p="10px">
              <Image w="100%" src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739126360/u7wsckol1ia07kfdwgmw.png" />
              <Text py="5px" textAlign="center"></Text>The Ultimate Guide to Choosing the Perfect Perfume for Any Occasion.
              <Link href="https://perfect-perfume-for-any-occasion.hashnode.dev/the-ultimate-guide-to-choosing-the-perfect-perfume-for-any-occasion" color="blue.500" textAlign="center" display="block">
                Read More
              </Link>
            </Box>

            <Box bg="white" className={NavStyle.shadowHover} p="10px">
              <Image w="100%" src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739126669/hwzma65dihjsqucki8lr.png" />
              <Text py="5px" textAlign="center">Why Arabic Perfumes Are So Unique & Long-Lasting.</Text>
              <Link href="https://arabic-perfumes.hashnode.dev/why-arabic-perfumes-are-so-unique-long-lasting" color="blue.500" textAlign="center" display="block">
                Read More
              </Link>
            </Box>

            <Box bg="white" className={NavStyle.shadowHover} p="10px">
              <Image w="100%" src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739064309/dc36dyrrgctf5148wirv.png" />
              <Text py="5px" textAlign="center">Why Arabic Perfumes Are So Unique & Long-Lasting</Text>
              <Link href="https://most-expensive-perfumes.hashnode.dev/most-expensive-perfumes-in-the-world-are-they-worth-it" color="blue.500" textAlign="center" display="block">
                Read More
              </Link>
            </Box>

            <Box bg="white" className={NavStyle.shadowHover} p="10px">
              <Image w="100%" src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1739127623/xvtgdfjbzvxp5xkkgbyp.jpg" />
              <Text py="5px" textAlign="center">How to Apply Perfume for Long-Lasting Scent: The Ultimate Guide.</Text>
              <Link href="https://how-to-apply-perfume.hashnode.dev/how-to-apply-perfume-for-long-lasting-scent-the-ultimate-guide" color="blue.500" textAlign="center" display="block">
                Read More
              </Link>
            </Box>

          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Blog;
