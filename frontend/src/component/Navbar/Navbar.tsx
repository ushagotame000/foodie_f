import React, { useContext, useState } from "react";
// import { FaCartShopping } from "react-icons/fa6";
import { assets } from "../../assets/assets";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { StoreContext } from "../Content/StoreContext";
import { profile } from "console";

interface NavbarProps {
  setShowLogin: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const {token,setToken} = useContext (StoreContext);

// logout functionality 
  const navigate = useNavigate();

const logout =()=>{
  localStorage.removeItem("token");
  setToken("");
  navigate("/")
}



  return (
    <>
      <div className="navbar py-0 px-[20px] flex justify-between items-center ">
        <div className="">
          <Link to="/">
            <img
              src={assets.logo}
              alt=""
              className="logo w-20 lg::w-140  md:gap-7 "
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="navbar-menu flex list-none gap-12 decoration-gray-500 text-lg   lg:gap-5  md:text-l  ">
            <Link
              to="/"
              onClick={() => setMenu("Home")}
              className={
                menu === "Home"
                  ? "active border-b-2 border-solid border-gray-400 cursor-pointer"
                  : ""
              }
            >
              Home
            </Link>
            <a
              href="#food-display"
              onClick={() => setMenu("food-display")}
              className={
                menu === "Menu"
                  ? "active border-b-2 border-solid border-gray-400 cursor-pointer"
                  : "asd"
              }
            >
              Menu
            </a>
            <a
              href="#app-download"
              onClick={() => setMenu("app-download")}
              className={
                menu === "app-download"
                  ? "active border-b-2 border-solid border-gray-400 cursor-pointer"
                  : ""
              }
            >
              Mobile-app
            </a>
            <a
              href="#footer"
              onClick={() => setMenu("Contact")}
              className={
                menu === "Contact"
                  ? "active border-b-2 border-solid border-gray-400 cursor-pointer"
                  : ""
              }
            >
              Contact
            </a>
          </ul>
        </div>
        <div className="navbar-right flex items-center gap-11 lg:gap-7 md:gap-5">
          <img src={assets.search_icon} alt="" className="lg:w-6  md:w-5" />
          <div className="navbar-search-icon relative">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
          </div>

          {!token?  <button
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex item-center gap-3 border-y-amber-800  ease-out hover: transition-transform"
          >
            Sign IN
          </button>:
         <div className="nav-profile relative group">
         <img src={assets.profile_icon} alt="Profile" className="cursor-pointer" />
         <ul className="dropdown absolute hidden group-hover:block bg-white shadow-md p-2 rounded-md mt-2  z-10 border-separate border-t-orange-300 flex-col">
           <button className="flex items-center gap-2 cursor-pointer hover:text-orange-300" ><img src={assets.bag_icon} alt="Shopping Bag" />Orders</button>
           <button onClick={logout} className="flex items-center gap-2 cursor-pointer  hover:text-orange-300"><img src={assets.logout_icon} alt="Logout" />Logout</button>
         </ul>
       </div>
       
       
          }
         


        </div>
      </div>

      {/* <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container ">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-4xl font-bold mt-10 font-serif"
              >
                <img src={logo} alt="logo" className="w-16" />
                UCafe
              </a>
            </div>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal absolute inset-x-0 top-5 h-16 ml-72">
            <ul className="hidden sm:flex gap-4">
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="# "
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex item-center gap-3">
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
