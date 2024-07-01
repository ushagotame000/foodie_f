import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar w-1/6  max-h-lvh border border-t-0 border-x-2 font-serif  border-neutral-300  ">
      <div className="sidebar-option pt-12 pl-0 flex flex-col gap-5 item item">
        <NavLink
          to="/Add"
          className="option flex items-center gap-2  border-y-2  border-neutral-300  px-2 py-2 rounded-sm cursor-pointer "
        >
          <img src={assets.add_icon} alt="" />
          <p className=" hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/List"
          className="option flex items-center gap-2  border-y-2  border-neutral-300  px-2 py-2 rounded-sm cursor-pointer "
        >
          <img src={assets.order_icon} alt="" />
          <p className=" hidden md:block">List Items </p>
        </NavLink>
        <NavLink
          to="/Orders"
          className="option flex items-center gap-2  border-y-2  border-neutral-300  px-2 py-2 rounded-sm cursor-pointer "
        >
          <img src={assets.order_icon} alt="" />
          <p className=" hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
