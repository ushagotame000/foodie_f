import React from "react";
const Header = () => {
  return (
    <>
      <div className=" w-full mx-4 m-auto bg-no-repeat bg-contain relative scroll-smooth  ">
        <img
          src="bg-image.jpg"
          alt=""
          className=" w-full object-cover md:h-full rounded-3xl "
        />
        <div className="absolute top-0 left-0 flex flex-col items-start justify-center h-full px-8 py-8 gap-8">
          <h2 className="font-medium font-mono text-white text-xl md:text-4xl lg:text-5xl  hover:animate-bounce max-w-96">
            We take pride in our food
          </h2>
          <p className=" text-white font-mono font-medium text-3xl ">
            Don't miss this Deal
          </p>
          <button className=" font-mono text-orange-400 bg-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex item-center border-y-amber-800 transition ease-out hover:ease-in ">
            Explore Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
