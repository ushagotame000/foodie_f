import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Content/StoreContext";
import axios from "axios";

interface LoginPopupProps {
  setShowLogin: (value: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin }) => {
  // const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  
  const {url,setToken} = useContext(StoreContext)
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const baseUrl = "http://localhost:5000";
    let newUrl = baseUrl;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    console.log('Submitting to:', newUrl);
    console.log('Data:', data);

    try {
      const response = await axios.post(newUrl, data);
      console.log('Response:', response);
      if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-popup absolute z-30 w-full h-auto grid place-content-center bg-none">
      <form
        onSubmit={onLogin}
        className="login-popup-container max-w-96 bg-white flex flex-col gap-7 rounded-xl text-base p-6 justify-center mt-24"
      >
        <div className="login-title flex justify-between text-center font-bold text-xl">
          <h2 className="signup">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="cursor-pointer w-4"
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currState === "Login" ? null : (
            <input
              onChange={onChangeHandler}
              value={data.name}
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="border border-gray-300 p-3 rounded-sm"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 p-3 rounded-sm"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your Password"
            required
            className="border border-gray-300 p-3 rounded-sm"
          />
        </div>
        <button
          type="submit"
          className="border-none p-3 rounded-md text-white bg-orange-500 font-medium cursor-pointer"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition flex items-start gap-2 mt-3.5 font-sans">
          <input type="checkbox" required className="mt-1" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-orange-500 font-semibold cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-orange-500 font-semibold cursor-pointer font-sans underline transform hover:translate-x-3 transition duration-300 ease-in-out"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
