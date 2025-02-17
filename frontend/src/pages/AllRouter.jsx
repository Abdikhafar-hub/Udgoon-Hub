import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Logout from "./Logout";
import Productdetails from "./Productdetails";
import CartPage from "./CartPage";
import HelpCenter from "./HelpCentre";
import UserAccount from "./UserAccount";
import Products from "./Products";
import CheckoutPage from "./CheckoutPage";
import Trending from "../components/Home/Trending";
import Testimonials from "../components/Home/Testimonials";
import PromoBanner from "../components/Home/PromoBanner";
import Contact from "../components/Home/Contact";
import AboutUs from "../components/Home/AboutUs";

export default function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/product/:id" element={<Productdetails />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/useraccount" element={<UserAccount />} /> 
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/promo" element={<PromoBanner />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}
