import React, { useState, createContext, useEffect } from "react";

// ✅ Create the UserContext
export const UserContext = createContext();

// ✅ Create the UserProvider function
export function UserProvider({ children }) {
  // Load user data from local storage OR use default values
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    status: false,
    name: "Guest",
    email: "",
    id: "",
    cart: [],
    totalPrice: 0,
  };

  // Load search query from localStorage or default to an empty string
  const storedSearch = localStorage.getItem("search") || "";

  const [user, setUser] = useState(storedUser);
  const [search, setSearch] = useState(storedSearch); // ✅ Ensures `search` persists

  // ✅ Sync user data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // ✅ Sync search query to local storage
  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  // ✅ Function to Recalculate Total Price
  const calculateTotalPrice = (cart) => {
    return cart.reduce((acc, item) => acc + (parseFloat(item.price) || 0) * item.quantity, 0);
  };

  // ✅ User Login Function
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

  // ✅ User Logout Function
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

  // ✅ Add to Cart Function
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

// ✅ Export Default UserProvider
export default UserProvider;
