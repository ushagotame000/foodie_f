import React from "react";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
      <div
        className="footer  flex bg-slate-800 flex-col items-center gap-4 p-5 text-white pt-15  mt-24"
        id="footer"
      >
        <div className="footer-content grid grid-flow-col grid-cols-3  ">
          <div className="footer-left footer-center flex items-start gap-5 flex-col mt-6 ml-20">
            <img src={assets.logo} alt="" className="logo w-20 " />
            <p className="text-xl text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              expedita unde nesciunt maiores similique eius, cumque ratione
              deleniti consectetur! Unde nostrum eum, tenetur optio quod ratione
              temporibus sit quasi officiis.
            </p>
            <div className="social-media-icon flex">
              <img
                className="w-10 mr-4"
                src={assets.facebook_icon}
                alt="facebook_icon"
              />
              <img className="w-10 mr-4" src={assets.twitter_icon} alt="" />
              <img className="w-10 mr-4" src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-center flex items-start gap-5 flex-col mt-24 ml-20 text-xl">
            <h2 className="font-bold">COMPANY</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-right footer-center flex items-start gap-5 flex-col mt-24 ml-20 text-xl">
            <h2 className="font-bold">GET IN TOUCH</h2>
            <ul className="space-y-2 text-gray-400">
              <li>9823123425</li>
              <li>contact@foodie.com</li>
            </ul>
          </div>
        </div>
        <hr className=" w-full h-1 mx-5 my-0 bg-gray-400 border-none" />

        <div className="footer-copyright">
          <p className="font-mono">
            {" "}
            Copyright 2024 © foodie.com -All Right Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
