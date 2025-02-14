import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // ✅ Load user from localStorage or create a guest user
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    status: false, // Guest user by default
    name: "",
    email: "",
    id: "",
    cart: JSON.parse(localStorage.getItem("guestCart")) || [],
    totalPrice: parseFloat(localStorage.getItem("guestTotalPrice")) || 0,
  };

  const [user, setUser] = useState(storedUser);

  // ✅ Function to Recalculate Total Price
  const calculateTotalPrice = (cart) => {
    return cart.reduce((acc, item) => acc + (Number(item.price) || 0) * item.quantity, 0);
  };

  // ✅ Save cart separately for guests and update total price
  useEffect(() => {
    if (user.status) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.setItem("guestCart", JSON.stringify(user.cart));
      localStorage.setItem("guestTotalPrice", user.totalPrice);
    }
  }, [user]);

  // ✅ User Login Function (preserve cart items)
  const login = (userData) => {
    setUser({
      ...userData,
      status: true,
      cart: user.cart.length ? user.cart : [],
      totalPrice: calculateTotalPrice(user.cart),
    });
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ✅ User Logout Function (preserve guest cart)
  const logout = () => {
    setUser({
      status: false,
      name: "",
      email: "",
      id: "",
      cart: JSON.parse(localStorage.getItem("guestCart")) || [],
      totalPrice: calculateTotalPrice(JSON.parse(localStorage.getItem("guestCart")) || []),
    });
    localStorage.removeItem("user");
  };

  // ✅ Add to Cart Function (Ensures Valid Prices)
  const addToCart = (product) => {
    setUser((prevUser) => {
      const existingProduct = prevUser.cart.find((item) => item.id === product.id);

      let updatedCart;
      if (existingProduct) {
        updatedCart = prevUser.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...prevUser.cart, { ...product, quantity: 1, price: Number(product.price) || 0 }];
      }

      return { ...prevUser, cart: updatedCart, totalPrice: calculateTotalPrice(updatedCart) };
    });
  };

  // ✅ Remove from Cart Function (Decreases quantity first before removing)
  const removeFromCart = (productId) => {
    setUser((prevUser) => {
      const updatedCart = prevUser.cart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // ✅ Remove only if quantity reaches 0

      return { ...prevUser, cart: updatedCart, totalPrice: calculateTotalPrice(updatedCart) };
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, addToCart, removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
}
