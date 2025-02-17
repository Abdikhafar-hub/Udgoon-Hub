import React, { useState, createContext, useEffect } from "react";


export const UserContext = createContext();


export function UserProvider({ children }) {
 
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    status: false,
    name: "Guest",
    email: "",
    id: "",
    cart: [],
    totalPrice: 0,
  };

  
  const storedSearch = localStorage.getItem("search") || "";

  const [user, setUser] = useState(storedUser);
  const [search, setSearch] = useState(storedSearch); 

  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);


  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  
  const calculateTotalPrice = (cart) => {
    return cart.reduce((acc, item) => acc + (parseFloat(item.price) || 0) * item.quantity, 0);
  };

  
  const login = (userData) => {
    const updatedUser = {
      ...userData,
      status: true,
      cart: user.cart.length ? user.cart : [],
      totalPrice: calculateTotalPrice(user.cart),
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    console.log("✅ User logged in:", updatedUser);
  };

  
  const logout = () => {
    console.log("🚪 User logged out");

    setUser({
      status: false,
      name: "Guest",
      email: "",
      id: "",
      cart: [],
      totalPrice: 0,
    });

    localStorage.removeItem("user");
  };

 
  const addToCart = (product) => {
    setUser((prevUser) => {
      const updatedCart = prevUser.cart ? [...prevUser.cart] : [];
      const existingProduct = updatedCart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      const updatedUser = {
        ...prevUser,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      return updatedUser;
    });
  };

  
  const removeFromCart = (productId) => {
    setUser((prevUser) => {
      const updatedCart = prevUser.cart
        .map((item) => {
          if (item.id === productId) {
            return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null;
          }
          return item;
        })
        .filter(Boolean);

      const updatedUser = {
        ...prevUser,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      return updatedUser;
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, addToCart, removeFromCart, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
}


export default UserProvider;
