// context/Shopcontext.jsx
import { createContext, useState, useEffect } from "react";
import { food_list as initialProducts } from "../assets/assets";

export const ShopContext = createContext();

const STORAGE_KEY = "products_v2"; // ✅ version key — change when data format changes

const ShopContextProvider = ({ children }) => {
  // Products (auto-refresh from initialProducts if version changes)
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [...initialProducts];
    } catch {
      return [...initialProducts];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [
      ...prev,
      { ...newProduct, _id: Date.now().toString() },
    ]);
  };

  const removeProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p._id !== productId));
  };

  const resetProducts = () => {
    setProducts([...initialProducts]);
  };

  // Cart
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
        updated[itemId]--;
        if (updated[itemId] <= 0) delete updated[itemId];
      }
      return updated;
    });
  };
  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const item = products.find((p) => p._id === id);
      return item ? total + item.price * qty : total;
    }, 0);
  };

  // Orders
  const [userOrders, setUserOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("orders");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(userOrders));
  }, [userOrders]);

  const addOrder = (orderItems) => {
    const newOrders = Object.entries(orderItems)
      .map(([id, qty]) => {
        const dish = products.find((p) => p._id === id);
        if (!dish) return null;
        return {
          image: dish.images?.[0] || "",
          name: dish.name,
          price: dish.price,
          quantity: qty,
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

  // Admin & search
  const [isAdmin, setIsAdmin] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalCartAmount,
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
