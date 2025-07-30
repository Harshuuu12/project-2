import { createContext, useState, useEffect } from "react";
import { food_list as initialProducts } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // ---------------------- Constants ----------------------
  const currency = "₹";
  const delivery_fee = "25";

  // ---------------------- Products ----------------------
  const [products, setProducts] = useState([...initialProducts]);

  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      _id: Date.now().toString(),
    };
    setProducts((prev) => [...prev, productWithId]);
  };

  const removeProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p._id !== productId));
  };

  const resetProducts = () => {
    setProducts([...initialProducts]);
  };

  // ---------------------- Cart ----------------------
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId]) {
        updated[itemId] -= 1;
        if (updated[itemId] <= 0) {
          delete updated[itemId];
        }
      }
      return updated;
    });
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  // ---------------------- Orders ----------------------
  const [userOrders, setUserOrders] = useState([]);

  const addOrder = (orderItems) => {
    const newOrders = Object.entries(orderItems)
      .map(([itemId, quantity]) => {
        const dish = products.find((p) => p._id === itemId);
        if (!dish) return null;

        return {
          image: dish.images?.[0] || "",
          name: dish.name,
          price: dish.price,
          quantity,
          date: new Date().toLocaleDateString(),
          status: "Confirmed",
        };
      })
      .filter(Boolean);

    if (newOrders.length) {
      setUserOrders((prev) => [...newOrders, ...prev]);
      setCartItems({});
    }
  };

  // ---------------------- Admin ----------------------
  const [isAdmin, setIsAdmin] = useState(false);

  // ---------------------- Search ----------------------
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // ---------------------- Context Provider ----------------------
  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        currency,
        delivery_fee,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        userOrders,
        addOrder,
        addProduct,
        removeProduct,
        resetProducts,
        isAdmin,
        setIsAdmin,
        search,
        setSearch,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
