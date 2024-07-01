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
  quantity:number;
};

export const StoreContext = createContext<{
  cartItems: Array<food_item>;
  addToCart: (item: food_item) => void;
  removeFromCart: (itemId: string) => void;
  food_list: Array<food_item>;
  setFoodList: React.Dispatch<React.SetStateAction<Array<food_item>>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  url:string;
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

  

  const addToCart = (item: food_item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter(item => item._id !== itemId));
  };



const getTotalCartAmount = () =>{
  let totalAmount = 0;

}

//fetch from database

const fetchFoodList = async () => {
  try {
    const response = await axios.get(url + "/list", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setFoodList(response.data.data);
  } catch (error) {
    console.error('Error fetching food items:', error);
  }
};

useEffect(() => {
  const storedToken = localStorage.getItem("token") || "";
  setToken(storedToken);
  fetchFoodList();
}, [token]);
  


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    food_list,
    setFoodList,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
