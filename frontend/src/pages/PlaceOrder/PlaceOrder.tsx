import React from "react";
import Footer from "../../component/Footer/Footer";
const PlaceOrder = () => {
  return (
    <>
      <div className="  md:flex-wrap-reverse">
        <form className="placeorder flex items-start justify-between gap-10 mt-24">
          <div className="place-order-left w-auto max-w-96">
            <p className="title font-bold font-sans text-2xl py-4">
              Delivery Information
            </p>
            <div className="multi-field flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className=" border border-orange-300 p-3 rounded-sm w-full mb-4 "
                // className="mb-4 w-full p-3 border-solid outline-orange-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
            />
            <input
              type="text"
              placeholder="Province"
              className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
            />
            <div className="multi-field flex gap-4">
              <input
                type="text"
                placeholder="City"
                className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
              />
              <input
                type="text"
                placeholder="Street"
                className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
              />
            </div>
            <div className="multi-field">
              <input
                type="text"
                placeholder="House No."
                className="border border-orange-300 p-3 rounded-sm w-full mb-4 "
              />
            </div>
            <input
              type="text"
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

              <button className="border-none bg-orange-400 m-5 px-6 py-0 h-9 rounded-md cursor-pointer text-white hover:bg-orange-500">
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
