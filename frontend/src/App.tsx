import React, { useContext, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopup from "./component/login form/LoginPopup";
import { StoreContext } from "./component/Content/StoreContext";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const { cartItems } = useContext(StoreContext);
  console.log({ cartItems });
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}

      <BrowserRouter>
        <div className="app w-5/6 mx-auto">
          <Navbar setShowLogin={setShowLogin} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlaceOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
