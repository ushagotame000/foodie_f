import React from "react";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div
      className="AppDownload m-auto mt-24 text-3xl text-center font-semibold font-sans "
      id="app-download"
    >
      <p>
        For Better Experience Dowload <br /> Foodie App
      </p>
      <div className="app-download-platform  flex justify-center gap-12 mt-4">
        <img
          src={assets.play_store}
          alt=""
          className=" max-w-48 transition-transform cursor-pointer hover:scale-105 "
        />
        <img
          src={assets.app_store}
          alt=""
          className="max-w-48 transition-transform cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AppDownload;
