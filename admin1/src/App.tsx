import React from "react";
import Navbar from "./component/Navbar.jsx/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Add from "./component/Orders/Add";
import List from "./component/Orders/List";
import Orders from "./component/Orders/Orders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
const url = "http://localhost:5000"

  return (
    <BrowserRouter>
      <div className="app ">
        <ToastContainer/>
        <Navbar />
        <hr className="border-none h-1 bg-gray-300" />
        <div className="app-content flex">
          <Sidebar />
          <Routes>
            <Route path="/Add" element={<Add />} />
            <Route path="/List" element={<List />} />
            <Route path="/Orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
