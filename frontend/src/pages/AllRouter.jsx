import {Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Logout from './Logout'
import Productdetails from './Productdetails'
import CartPage from './CartPage'
import HelpCenter from './HelpCentre'
import UserAccount from "./UserAccount";
import Products from "./Products";


export default function AllRouter() {

    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/CartPage/" element={<CartPage />} />
        <Route path="/help/" element={<HelpCenter />} />
        <Route path="/useraccount" element={<UserAccount />} /> 
        <Route path="/products" element={<Products />} />
      </Routes>
    );
}