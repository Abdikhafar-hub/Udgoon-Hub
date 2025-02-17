import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Text, Image, Button, HStack } from "@chakra-ui/react";
import { UserContext } from "../Contexts/UserContext";

const ProductDetails = () => {
  const { addToCart, removeFromCart, user } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  
  const perfumes = [
    { id: 1, name: "9 PM", price: "8000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739064151/h8lzffi1pmtiakxiamle.jpg" },
    { id: 2, name: "Rasasi La Yuqawam", price: "15000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739140695/oqhoht8olnyihtrxffhd.jpg" },
    { id: 3, name: "Lattafa Oud Mood", price: "6000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739140852/yyabhbtz75x4iqxto0mi.png" },
    { id: 4, name: "Swiss Arabian Shaghaf Oud", price: "7500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739140995/te4knh0fwypehjq72jt1.png" },
    { id: 5, name: "Al Haramain Amber Oud", price: "9000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739064684/kju1rpbttd2tgystypwo.png" },
    { id: 6, name: "Amouage Interlude Man", price: "30000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739141141/jieyegkcxmlkjnzh4xid.jpg" },
    { id: 7, name: "Ard Al Zaafaran Dirham", price: "5500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739141280/sbiuegqza8senxke5qtl.jpg" },
    { id: 8, name: "Naseem Al Lail", price: "4500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739141372/dykp0kbcaz9uakicvsbl.jpg" },
    { id: 9, name: "Anfar Bakhoor", price: "3500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739141495/vaxascgmwik3u10hiwhl.jpg" },
    { id: 10, name: "Somali Musk", price: "4000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739141591/ocluhtdl3q9sb7v7bew6.png" },
    { id: 11, name: "Somali Frankincense Perfume", price: "5000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739141715/arjs61fisfdfiey5gg3f.jpg" },
    { id: 12, name: "Lattafa Raghba", price: "7000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739141825/zdlwvpnoc7msnq8jgprg.jpg" },
    { id: 13, name: "Al Haramain L’Aventure", price: "10000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142081/zjxtb6a31mkpzn0qssjz.png" },
    { id: 14, name: "Ajwad by Lattafa", price: "6500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142146/mzjjxtdgjtyp8gbsjbtj.jpg" },
    { id: 15, name: "Arabian Oud Kalemat", price: "15000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142252/qinmcohah6v12sxzj1mt.png" },
    { id: 16, name: "Somali Bakhoor", price: "3000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142392/lk9k6vofqxyai5fq65q7.png" },
    { id: 17, name: "My Perfumes Oud Al Layl", price: "5500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142454/xfwhbax3dvisu354jgnr.jpg" },
    { id: 18, name: "Somali Rose Perfume", price: "6000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142586/g1ayhayzlyvmwnjuleay.png" },
    { id: 19, name: "Dior Sauvage", price: "12000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142721/k8wdiwdbc8sus0pufcny.jpg" },
    { id: 20, name: "Bleu de Chanel", price: "14000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142786/bixighbbmg3dvwp8vudk.jpg" },
    { id: 21, name: "Creed Aventus", price: "35000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142851/rdour22z79b4jvw7nigx.jpg" },
    { id: 22, name: "Acqua di Gio", price: "10000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739142910/ay6kxpntcthvgy2vb4p9.jpg" },
    { id: 23, name: "Tom Ford Oud Wood", price: "25000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143004/oorkgsocsmw1kkcx7i7d.jpg" },
    { id: 24, name: "Paco Rabanne 1 Million", price: "9500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143061/lpjkmvdxl46n5sfotqlr.jpg" },
    { id: 25, name: "Versace Eros", price: "8500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143137/kw7vzjv8k9oikrueghlk.jpg" },
    { id: 26, name: "Jean Paul Gaultier Le Male", price: "12000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143226/oax1hirdnnva1ciuelvr.jpg" },
    { id: 27, name: "Hugo Boss Bottled", price: "9000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143291/cpf9jhgvxk9b0dmnntkg.jpg" },
    { id: 28, name: "Yves Saint Laurent La Nuit de L'Homme", price: "13000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143371/nv7uo0c3kjdfcfpfo3cw.jpg" },
    { id: 29, name: "Chanel No. 5", price: "15000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143437/jiu4hfljie6ousgajdtq.jpg" },
    { id: 30, name: "Dior J'adore", price: "14000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143539/votwf3cvqad6esl7qbiy.png" },
    { id: 31, name: "Gucci Bloom", price: "12500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143636/h29d0syv0jbwliwol0qv.jpg" },
    { id: 32, name: "Yves Saint Laurent Mon Paris", price: "13500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143741/swrkyy20wxchdn8llhvn.jpg" },
    { id: 33, name: "Lancôme La Vie Est Belle", price: "14000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143858/sxy9tgzcpghcgyyorrnp.png" },
    { id: 34, name: "Viktor & Rolf Flowerbomb", price: "15500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739143927/jekw1hw0zdoqcimk2pmm.jpg" },
    { id: 35, name: "Carolina Herrera Good Girl", price: "13000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144039/uhqethx4cewzybidm8ac.jpg" },
    { id: 36, name: "Dolce & Gabbana Light Blue", price: "11000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144114/kn1abjmphipazztowl7a.jpg" },
    { id: 37, name: "Marc Jacobs Daisy", price: "12500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144188/knwtpdha25ufcoobnvlc.jpg" },
    { id: 38, name: "Burberry Her", price: "12000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144273/cxguramv8mzyh3enzn1m.jpg" },
    { id: 39, name: "Giorgio Armani My Way", price: "13500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144397/zqi1z2i0khiv4yjthxdp.png" },
    { id: 40, name: "Prada Candy", price: "11800", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144464/bh5cbcfwawzmogephvmu.jpg" },
    { id: 41, name: "Tom Ford Black Orchid", price: "17000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144588/fvaeyglqy6k0ympp3jml.png" },
    { id: 42, name: "Givenchy L'Interdit", price: "14500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144708/ca1t93iarqihxamsb7ji.png" },
    { id: 43, name: "Jo Malone Peony & Blush Suede", price: "16000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144793/lfcvuqya85k2legksdfw.jpg" },
    { id: 44, name: "Gucci Guilty", price: "14500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739064161/uc3khepmva2bwe6z8riq.jpg" },
    { id: 45, name: "YSL Libre Intense", price: "29500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739152179/xn2ldfqpa5lu3udcg4ml.png" },
    { id: 46, name: "Dolce & Gabbana", price: "19500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739144114/kn1abjmphipazztowl7a.jpg" },
    { id: 47, name: "Sultan Oud", price: "10500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739065123/p7g9kgmtewe911gsxhtz.jpg" },
    { id: 48, name: "Teriaq Intense", price: "8500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739152536/em0ogg1ckxpcgt9dbkzm.jpg" },
    { id: 49, name: "Maahir Legacy", price: "15500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739152655/cv6l3my3pzjggoyzjqb2.jpg" },
    { id: 50, name: "Hawas Ice", price: "9500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739152792/mg3h0oikkfwfgyjbhsow.jpg" },
    { id: 51, name: "Now Eau De Parfum", price: "6000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739152917/v479wxmwvgx6cmiyp3gd.png" },
    { id: 52, name: "Arsh Extrait ", price: "7500", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739153234/alepupzsgj7hplisriwx.jpg" },
    { id: 53, name: "Black Opium YSL", price: "23000", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739153375/p4caf0yj8e7i5hoy6ltb.jpg" },
    { id: 54, name: "Club De Nuit", price: "10400", currency: "KSH", image_link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1739153688/oyut35besb3jlik07yfm.png" }
    
  ];

  const product = perfumes.find((p) => p.id === parseInt(id));

  if (!product) return <Text>Product Not Found</Text>;

  
  const cart = user?.cart || [];
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 1;

  return (
    <Box w="60%" m="auto" py={10}>
     
      <Image 
        src={product.image_link} 
        alt={product.name} 
        boxSize="300px" 
        objectFit="cover" 
        fallbackSrc="https://via.placeholder.com/300" 
      />

      <Text fontSize="24px" fontWeight="bold">{product.name}</Text>
      <Text fontSize="20px">Price: KSH {product.price}</Text>

     
      <Text fontSize="18px" color="green.500">In Stock</Text>

      <HStack mt={4}>
        <Button isDisabled={quantity === 1} onClick={() => removeFromCart(product.id)}>-</Button>
        <Text>{quantity}</Text>
        <Button onClick={() => addToCart(product)}>+</Button>
      </HStack>

      <Button 
        mt={4} 
        w="100%" 
        bgColor="black" 
        color="white" 
        _hover={{ bg: "cyan.500" }} 
        onClick={() => addToCart(product)}
      >
        Add to Cart 🛒
      </Button>

      <Button mt={2} w="100%" onClick={() => navigate("/")}>Continue Shopping</Button>
    </Box>
  );
};

export default ProductDetails;
