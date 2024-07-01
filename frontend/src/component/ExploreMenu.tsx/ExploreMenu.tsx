import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <>
      <div className="explore_menu  flex flex-col gap-5 " id="explore_menu">
        <h1 className="text-gray-800 font-mono text-4xl  pt-8  md:font-bold font-bold ">
          Explore Our Menu
        </h1>
        <p className="explore-menu-text  text-gray-800  font-mono  font-extrabold text-xl">
          Choose as you want
        </p>
        <div className="explore_menu_list flex justify-between items-center gap-8 text-center mt-5 mb-0 overflow-x-scroll ">
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                // className="explore-menu-list-item  font-mono pointer text-gray-500 text-xl cursor-pointer active:border-solid bg-orange-600 p-1"
              >
                <img
                  src={item.menu_image}
                  alt=""
                  className="w-24 min-w-20 cursor-pointer rounded-md ease-out duration-300 hover:opacity-60"
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr className="mt-3 mb-0 h-1 bg-slate-300 border-none" />
      </div>
    </>
  );
};

export default ExploreMenu;
