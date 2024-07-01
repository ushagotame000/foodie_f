import React, { useContext } from "react";
import { food_list } from "../../assets/assets";
import FoodItem from "./FoodItem";
import { StoreContext, food_item } from "../Content/StoreContext";

const DisplayItem = () => {
  const {food_list} = useContext(StoreContext)
  const category = "All";

  return (
    <div>
      <div className="food-display" id="food-display">
        <h2 className="font-mono text-2xl font-bold text-gray-900 py-2 pt-2">
          Top Dishes near you
        </h2>
        <div className="food-display-list grid lg:grid-cols-4 gap-y-2 gap-x-2 md:grid-cols-3 sm:grid-cols-1">
          {food_list.map((item: food_item, index:number) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  _id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
