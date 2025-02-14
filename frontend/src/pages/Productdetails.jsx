import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Text, Image, Button, HStack } from "@chakra-ui/react";
import { UserContext } from "../Contexts/UserContext";

const ProductDetails = () => {
  const { addToCart, removeFromCart, user } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const perfumes = [
    { id: 1, name: "9 PM", price: "8000", currency: "KSH", image_link: "https://example.com/9_pm.jpg" },
    { id: 2, name: "Rasasi La Yuqawam", price: "15000", currency: "KSH", image_link: "https://example.com/rasasi_la_yuqawam.jpg" },
    { id: 3, name: "Lattafa Oud Mood", price: "6000", currency: "KSH", image_link: "https://example.com/lattafa_oud_mood.jpg" },
    { id: 4, name: "Swiss Arabian Shaghaf Oud", price: "7500", currency: "KSH", image_link: "https://example.com/swiss_arabian_shaghaf_oud.jpg" },
    { id: 5, name: "Al Haramain Amber Oud", price: "9000", currency: "KSH", image_link: "https://example.com/al_haramain_amber_oud.jpg" },
    { id: 6, name: "Amouage Interlude Man", price: "30000", currency: "KSH", image_link: "https://example.com/amouage_interlude_man.jpg" },
    { id: 7, name: "Ard Al Zaafaran Dirham", price: "5500", currency: "KSH", image_link: "https://example.com/ard_al_zaafaran_dirham.jpg" },
    { id: 8, name: "Naseem Al Lail", price: "4500", currency: "KSH", image_link: "https://example.com/naseem_al_lail.jpg" },
    { id: 9, name: "Anfar Bakhoor", price: "3500", currency: "KSH", image_link: "https://example.com/anfar_bakhoor.jpg" },
    { id: 10, name: "Somali Musk", price: "4000", currency: "KSH", image_link: "https://example.com/somali_musk.jpg" },
    { id: 11, name: "Somali Frankincense Perfume", price: "5000", currency: "KSH", image_link: "https://example.com/somali_frankincense_perfume.jpg" },
    { id: 12, name: "Lattafa Raghba", price: "7000", currency: "KSH", image_link: "https://example.com/lattafa_raghba.jpg" },
    { id: 13, name: "Al Haramain L’Aventure", price: "10000", currency: "KSH", image_link: "https://example.com/al_haramain_laventure.jpg" },
    { id: 14, name: "Ajwad by Lattafa", price: "6500", currency: "KSH", image_link: "https://example.com/ajwad_by_lattafa.jpg" },
    { id: 15, name: "Arabian Oud Kalemat", price: "15000", currency: "KSH", image_link: "https://example.com/arabian_oud_kalemat.jpg" },
    { id: 16, name: "Somali Bakhoor", price: "3000", currency: "KSH", image_link: "https://example.com/somali_bakhoor.jpg" },
    { id: 17, name: "My Perfumes Oud Al Layl", price: "5500", currency: "KSH", image_link: "https://example.com/my_perfumes_oud_al_layl.jpg" },
    { id: 18, name: "Somali Rose Perfume", price: "6000", currency: "KSH", image_link: "https://example.com/somali_rose_perfume.jpg" },
    { id: 19, name: "Dior Sauvage", price: "12000", currency: "KSH", image_link: "https://example.com/dior_sauvage.jpg" },
    { id: 20, name: "Bleu de Chanel", price: "14000", currency: "KSH", image_link: "https://example.com/bleu_de_chanel.jpg" },
    { id: 21, name: "Creed Aventus", price: "35000", currency: "KSH", image_link: "https://example.com/creed_aventus.jpg" },
    { id: 22, name: "Acqua di Gio", price: "10000", currency: "KSH", image_link: "https://example.com/acqua_di_gio.jpg" },
    { id: 23, name: "Tom Ford Oud Wood", price: "25000", currency: "KSH", image_link: "https://example.com/oud_wood.jpg" },
    { id: 24, name: "Paco Rabanne 1 Million", price: "9500", currency: "KSH", image_link: "https://example.com/1_million.jpg" },
    { id: 25, name: "Versace Eros", price: "8500", currency: "KSH", image_link: "https://example.com/versace_eros.jpg" },
    { id: 26, name: "Jean Paul Gaultier Le Male", price: "12000", currency: "KSH", image_link: "https://example.com/le_male.jpg" },
    { id: 27, name: "Hugo Boss Bottled", price: "9000", currency: "KSH", image_link: "https://example.com/boss_bottled.jpg" },
    { id: 28, name: "Yves Saint Laurent La Nuit de L'Homme", price: "13000", currency: "KSH", image_link: "https://example.com/la_nuit_de_lhomme.jpg" },
    { id: 29, name: "Chanel No. 5", price: "15000", currency: "KSH", image_link: "https://example.com/chanel_no_5.jpg" },
    { id: 30, name: "Dior J'adore", price: "14000", currency: "KSH", image_link: "https://example.com/dior_jadore.jpg" },
    { id: 31, name: "Gucci Bloom", price: "12500", currency: "KSH", image_link: "https://example.com/gucci_bloom.jpg" },
    { id: 32, name: "Yves Saint Laurent Mon Paris", price: "13500", currency: "KSH", image_link: "https://example.com/mon_paris.jpg" },
    { id: 33, name: "Lancôme La Vie Est Belle", price: "14000", currency: "KSH", image_link: "https://example.com/la_vie_est_belle.jpg" },
    { id: 34, name: "Viktor & Rolf Flowerbomb", price: "15500", currency: "KSH", image_link: "https://example.com/flowerbomb.jpg" },
    { id: 35, name: "Carolina Herrera Good Girl", price: "13000", currency: "KSH", image_link: "https://example.com/good_girl.jpg" },
    { id: 36, name: "Dolce & Gabbana Light Blue", price: "11000", currency: "KSH", image_link: "https://example.com/light_blue.jpg" },
    { id: 37, name: "Marc Jacobs Daisy", price: "12500", currency: "KSH", image_link: "https://example.com/daisy.jpg" },
    { id: 38, name: "Burberry Her", price: "12000", currency: "KSH", image_link: "https://example.com/burberry_her.jpg" },
    { id: 39, name: "Giorgio Armani My Way", price: "13500", currency: "KSH", image_link: "https://example.com/my_way.jpg" },
    { id: 40, name: "Prada Candy", price: "11800", currency: "KSH", image_link: "https://example.com/prada_candy.jpg" },
    { id: 41, name: "Tom Ford Black Orchid", price: "17000", currency: "KSH", image_link: "https://example.com/black_orchid.jpg" },
    { id: 42, name: "Givenchy L'Interdit", price: "14500", currency: "KSH", image_link: "https://example.com/linterdit.jpg" },
    { id: 43, name: "Jo Malone Peony & Blush Suede", price: "16000", currency: "KSH", image_link: "https://example.com/peony_blush_suede.jpg" }
  ];

  // Find the selected product
  const product = perfumes.find((p) => p.id === parseInt(id));

  if (!product) return <Text>Product Not Found</Text>;

  // Ensure cart exists before accessing
  const cart = user?.cart || [];
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <Box w="60%" m="auto" py={10}>
      <Image src={product.image_link} alt={product.name} boxSize="300px" objectFit="cover" />
      <Text fontSize="24px" fontWeight="bold">{product.name}</Text>
      <Text fontSize="20px">Price: KSH {product.price}</Text>
      <Text fontSize="18px" color={product.stock > 0 ? "green" : "red"}>
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </Text>

      <HStack mt={4}>
        <Button isDisabled={quantity === 0} onClick={() => removeFromCart(product.id)}>-</Button>
        <Text>{quantity}</Text> {/* ✅ FIXED: Only showing quantity, not object */}
        <Button isDisabled={quantity >= product.stock} onClick={() => addToCart(product)}>+</Button>
      </HStack>

      <Button mt={4} w="100%" bgColor="black" color="white" _hover={{ bg: "cyan.500" }} onClick={() => addToCart(product)}>
        Add to Cart
      </Button>

      <Button mt={2} w="100%" onClick={() => navigate("/productpage")}>Continue Shopping</Button>
    </Box>
  );
};

export default ProductDetails;
