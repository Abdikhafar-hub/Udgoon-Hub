import React, { useState, createContext, useEffect } from "react";

// ✅ Create the UserContext
export const UserContext = createContext();

// ✅ Create the UserProvider
export function UserProvider({ children }) {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    status: false,
    name: "",
    email: "",
    id: "",
    cart: [],
    totalPrice: 0,
  };

  const [user, setUser] = useState(storedUser);
  const [search, setSearch] = useState(""); // ✅ Added search state

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // ✅ Function to Recalculate Total Price
  const calculateTotalPrice = (cart) => {
    return cart.reduce((acc, item) => acc + (Number(item.price) || 0) * item.quantity, 0);
  };

  // ✅ Updated `addToCart`
  const addToCart = (product) => {
    setUser((prevUser) => {
      const updatedCart = prevUser.cart ? [...prevUser.cart] : [];

      const existingProduct = updatedCart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      return { 
        ...prevUser, 
        cart: updatedCart, 
        totalPrice: calculateTotalPrice(updatedCart) 
      };
    });
  };

  // ✅ Updated `removeFromCart`
  const removeFromCart = (productId) => {
    setUser((prevUser) => {
      const updatedCart = prevUser.cart
        .map((item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return null; // ✅ Remove item if quantity is 1
          }
          return item;
        })
        .filter(Boolean); // ✅ Remove null values (deleted items)

      return { 
        ...prevUser, 
        cart: updatedCart, 
        totalPrice: calculateTotalPrice(updatedCart) 
      };
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, addToCart, removeFromCart, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
}

// ✅ Ensure it's exported correctly
export default UserProvider;
