import React, { useState, createContext, useEffect } from "react";

// Create UserContext
export const UserContext = createContext();

// UserProvider Component
export function UserProvider({ children }) {
  // Load user from localStorage or set default values
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    status: false,
    name: "Guest",
    email: "",
    id: "",
    phone: "",
    profilePic: "",
    cart: [],
    totalPrice: 0,
    orders: [],
    payments: [],
  };

  // Load wishlist from localStorage or set default
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const storedSearch = localStorage.getItem("search") || "";

  // Define states
  const [user, setUser] = useState(storedUser);
  const [wishlist, setWishlist] = useState(storedWishlist);
  const [search, setSearch] = useState(storedSearch);  // ✅ FIX: Include search state


  // Update localStorage when user data changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Update localStorage when wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  // Calculate total price of items in cart
  const calculateTotalPrice = (cart) => {
    return cart.reduce((acc, item) => acc + (parseFloat(item.price) || 0) * item.quantity, 0);
  };

  // User Login Function
  const login = (userData) => {
    const updatedUser = {
      ...userData,
      status: true,
      cart: user.cart.length ? user.cart : [],
      totalPrice: calculateTotalPrice(user.cart),
      orders: userData.orders || [],
      payments: userData.payments || [],
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    console.log("✅ User logged in:", updatedUser);
  };

  // User Logout Function
  const logout = () => {
    console.log("🚪 User logged out");

    setUser({
      status: false,
      name: "Guest",
      email: "",
      id: "",
      phone: "",
      profilePic: "",
      cart: [],
      totalPrice: 0,
      orders: [],
      payments: [],
    });

    setWishlist([]);
    setSearch(""); 
    localStorage.removeItem("user");
    localStorage.removeItem("wishlist");
    localStorage.removeItem("search");
  };

  // Add item to cart
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

  // Remove item from cart
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

  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === product.id)) {
        const updatedWishlist = [...prevWishlist, product];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      return prevWishlist;
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        cart: user.cart || [],
        addToCart,
        removeFromCart,
        wishlist: wishlist || [],
        addToWishlist,
        removeFromWishlist,
        search,
        setSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
