import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import ratingStars from "../../assets/rating_starts.png";
import { StoreContext, food_item } from "../Content/StoreContext";

interface FoodItemProps {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const FoodItem: React.FC<FoodItemProps> = ({
  _id,
  name,
  price,
  description,
  image
}) => {
  const [itemCount, setItemCount] = useState(0);

  // Retrieve `url` and other context values from StoreContext
  const { addToCart, cartItems, removeFromCart, url }: {
    addToCart: (item: food_item) => void;
    cartItems: food_item[];
    removeFromCart: (itemId: string) => void;
    url: string; // Assuming `url` is a string pointing to the base URL
  } = useContext(StoreContext);

  // Log values for debugging
  useEffect(() => {
    console.log("url:", url);
    console.log("image:", image);
    console.log("Image URL:", `${url}/images/${image}`);
  }, [url, image]);

  const handleClick = () => {
    addToCart({ _id, name, price, description, image } as food_item);
    setItemCount((prev) => prev + 1);
  };

  return (
    <div className="food-item w-auto m-auto ease-in-out rounded-md hover:opacity-75 p-1">
      <div className="food-item-img-container relative">
        <img
          src={`${url}/images/${image}`} 
          alt={name}
          className="w-auto border-spacing-1 rounded-2xl"
        />
        {!itemCount ? (
          <img
            className="add absolute w-10 ml-60 cursor-pointer rounded-lg bottom-0 left-5"
            onClick={handleClick}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter absolute ml-48 flex items-center gap-2 rounded-2xl bg-white bottom-0 w-fit left-4">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>
      <div className="food-item-name-rating flex items-center mt-5">
        <p className="text-2xl font-medium font-mono">{name}</p>
        <img
          className="w-20"
          src={ratingStars}
          alt="Rating Stars"
        />
      </div>
      <p className="food-item-desc text-gray-500 text-sm">{description}</p>
      <p className="food-item-price text-orange-500 font-bold mt-3 mb-0 text-lg">
        Rs.{price}
      </p>
    </div>
  );
};

export default FoodItem;
