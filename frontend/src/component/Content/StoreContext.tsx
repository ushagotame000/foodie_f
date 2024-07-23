import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

// Define type for cartItems
export type food_item = {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
};

export const StoreContext = createContext<{
  cartItems: Array<food_item>;
  addToCart: (item: food_item) => void;
  removeFromCart: (itemId: string) => void;
  food_list: Array<food_item>;
  setFoodList: React.Dispatch<React.SetStateAction<Array<food_item>>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  url: string;
}>({
  cartItems: [],
  addToCart: (item: food_item) => {},
  removeFromCart: (itemId: string) => {},
  food_list: [],
  setFoodList: () => {},
  token: "",
  setToken: () => {},
  url: "",
});

interface StoreContextProviderProps {
  children: React.ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = (props) => {
  const [cartItems, setCartItems] = useState<Array<food_item>>([]);
  const [food_list, setFoodList] = useState<Array<food_item>>([]);
  const url = "http://localhost:5000";
  const [token, setToken] = useState<string>("");

  const saveCartToLocalStorage = (items: Array<food_item>) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const addToCart = async (item: food_item) => {
    try {
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      saveCartToLocalStorage(updatedCart);
      if (token) {
        await axios.post(url + "/api/cart/add", { itemId: item._id }, { headers: { token } });
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      const updatedCart = cartItems.filter(item => item._id !== itemId);
      setCartItems(updatedCart);
      saveCartToLocalStorage(updatedCart);
      if (token) {
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFoodList(response.data.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const loadCartData = async (token: string) => {
    if (token) {
      try {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        const cartData = response.data.cartData;
        if (Array.isArray(cartData)) {
          setCartItems(cartData);
          saveCartToLocalStorage(cartData);
        } else {
          console.error('Loaded cart data is not an array');
        }
      } catch (error) {
        console.error('Error loading cart data:', error);
      }
    }
  };

  useEffect(() => {
    const initialize = async () => {
      // Retrieve token and cart data from local storage
      const storedToken = localStorage.getItem("token") || "";
      const storedCart = localStorage.getItem("cartItems");

      setToken(storedToken);

      // Initialize cartItems from local storage
      if (storedCart) {
        try {
          const cartData = JSON.parse(storedCart);
          if (Array.isArray(cartData)) {
            setCartItems(cartData);
          }
        } catch (error) {
          console.error('Error parsing cart data from local storage:', error);
        }
      }

      fetchFoodList();
      if (storedToken) {
        await loadCartData(storedToken);
      }
    };

    initialize();
  }, []);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    food_list,
    setFoodList,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
