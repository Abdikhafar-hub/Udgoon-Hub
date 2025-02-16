import React, { useState, createContext, useEffect } from "react";

// ✅ Create the UserContext
export const UserContext = createContext();

// ✅ Create the UserProvider function
export function UserProvider({ children }) {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    status: false,
    name: "Guest",  // ✅ Default is "Guest" instead of "User"
    email: "",
    id: "",
    cart: [],
    totalPrice: 0,
  };
  
  const [user, setUser] = useState(storedUser);
  const [search, setSearch] = useState()
  
  useEffect(() => {
    console.log("Updated User in Context:", user);  // ✅ Debugging
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  

  // ✅ Function to Recalculate Total Price
  const calculateTotalPrice = (cart) => {
    return cart.reduce((acc, item) => acc + (Number(item.price) || 0) * item.quantity, 0);
  };

  // ✅ User Login Function
  const login = (userData) => {
    setUser({
      ...userData,
      status: true,
      cart: user.cart.length ? user.cart : [],
      totalPrice: calculateTotalPrice(user.cart),
    });

    localStorage.setItem(
      "user",
      JSON.stringify({
        ...userData,
        status: true,
        cart: user.cart.length ? user.cart : [],
        totalPrice: calculateTotalPrice(user.cart),
      })
    );
  };

  // ✅ User Logout Function
  const logout = () => {
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

      return { 
        ...prevUser, 
        cart: updatedCart, 
        totalPrice: calculateTotalPrice(updatedCart) 
      };
    });
  };

  // ✅ Remove from Cart Function
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
        .filter(Boolean);

      return { 
        ...prevUser, 
        cart: updatedCart, 
        totalPrice: calculateTotalPrice(updatedCart) 
      };
    });
  };

  // ✅ Ensure return is inside the function
  return (
    <UserContext.Provider value={{ user, setUser, login, logout, addToCart, removeFromCart, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
}

// ✅ Export Default UserProvider
export default UserProvider;
