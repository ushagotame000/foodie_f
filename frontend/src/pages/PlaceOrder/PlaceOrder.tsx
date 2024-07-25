import React, { useContext, useEffect, useState,ChangeEvent } from "react";
import Footer from "../../component/Footer/Footer";
import { food_item, StoreContext } from "../../component/Content/StoreContext";
import axios from "axios";
import { error } from "console";
const PlaceOrder = () => {
  // const {getTotalCartAmount, token,food_list,cartItems,url}= useContext(StoreContext)

  const { token,food_list,cartItems,url}= useContext(StoreContext);
  const [data,setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    province: "",
    city:"",
    street: "",
   houseNo:"",
    phone:""
  })

  const onChangeHandler =  (event: ChangeEvent<HTMLInputElement>) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  useEffect(()=>{
    console.log(data);
  },[data])



  // const placeorder = async (event:ChangeEvent<HTMLInputElement>) =>{
  //   event.preventDefault();
  //   let orderItems: food_item[] = [];
  //   food_list.map((item)=>{
  //     if(cartItems[item._id]>0){
  //     let itemInfo = item;
  //     itemInfo["quantity"] = cartItems[item._id];
  //     orderItems.push(itemInfo);  
  //     }
  //   })
  //   console.log(orderItems);
    

  // }



  // let orderData = {
  //   address:data,
  //   // items:orderItems,
  //   // amount:getTotalCartAmount()+50,
  // }
  // let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
  // if(response.data.success){
  //   const {session_url} = response.data;
  //   window.location.replace(session_url);

  // }
  // else{
  //   alert("ERROR");
  // }

  return (

    <>
      <div className="  md:flex-wrap-reverse">
        <form className="placeorder flex items-start justify-between gap-10 mt-24">
          <div className="place-order-left w-auto max-w-96">
            <p className="title font-bold font-sans text-2xl py-4">
              Delivery Information
            </p>
            <div className="multi-field flex gap-4">
              <input  required
                type="text"
                onChange={onChangeHandler}
                name="firstName"
                value={data.firstName}
                placeholder="First Name"
                className=" border border-orange-300 p-3 rounded-sm w-full mb-4 "
                // className="mb-4 w-full p-3 border-solid outline-orange-400"
              />
              <input required
                type="text"
                placeholder="Last Name"
                onChange={onChangeHandler}
                name="lastName"
                value={data.lastName}
                className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
              />
            </div>
            <input required
              type="email"
              onChange={onChangeHandler}
              name="email"
              value={data.email}
              placeholder="Email Address"
              className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
            />
            <input required
              type="text"
              onChange={onChangeHandler}
              name="province"
              value={data.province}
              placeholder="Province"
              className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
            />
            <div className="multi-field flex gap-4">
              <input required
                type="text"
                onChange={onChangeHandler}
                name="city"
                value={data.city}
                placeholder="City"
                className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
              />
              <input
                type="text"
                onChange={onChangeHandler}
                name="street"
                value={data.street}
                placeholder="Street"
                className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
              />
            </div>
            <div className="multi-field">
              <input
                type="text"
                onChange={onChangeHandler}
                name="houseNo"
                value={data.houseNo}
                placeholder="House No."
                className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
              />
            </div>
            <input required
              type="text"
              onChange={onChangeHandler}
              name="phone"
              value={data.phone}
              placeholder="Phone"
              className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
            />
          </div>
          <div className="place-order-right w-full max-w-md ">
            {/* right side */}
            <div className="cart-total flex-1 flex-col gap-5  md:justify-start">
              <h2 className="font-bold font-sans text-2xl py-4"> Cart Total</h2>

              <div>
                <div className="cart-total-details flex justify-between text-gray-600 w-full mb-4">
                  <p>Subtotal</p>
                  <p>{0}</p>
                </div>

                <div className="cart-total-details flex justify-between text-gray-600w-full mb-4">
                  <p>Delivery Fee</p>
                  <p>{2}</p>
                </div>
                <hr className="mx-3 my-0 " />
                <div className="cart-total-details flex justify-between text-gray-600 w-full mb-4">
                  <b>Total</b>
                  <b>{0}</b>
                </div>
              </div>

              <button type="submit" className="border-none bg-orange-400 m-5 px-6 py-0 h-9 rounded-md cursor-pointer text-white hover:bg-orange-500">
                PROCEED TO Payment
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrder;
