import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import ReactSimplyCarouselExample from "./Components/CrousalBanner";
import Items from "./Components/CrousalItems.js";

const Body = () => {
  return (
    <div className="body-container w-full  flex items-center justify-center">
      <div className="w-9/12 ml-7  overflow-hidden">
        <div className="heading w-full mt-5">
          <h1 className="font-bold text-2xl mb-4 mt-3 text-cstmblack">
            Best offers for you
          </h1>
          <ReactSimplyCarouselExample />
        </div>
        <div className=" mt-12 border-2 mb-12  w-full">
          <h1 className="font-bold text-2xl mb-4 text-cstmblack">
            What's on your mind?
          </h1>
          <div className="dish-container w-full flex justify-start ">
            <div className="dish-image w-full">
              <Items />
            </div>
          </div>
        </div>
        <div className="restaurants w-full border-2 border-sky-500">
          <h1 className="font-bold text-2xl mb-4 text-cstmblack">
            Top restaurant chains in Kolkata
          </h1>
          <div className="restaurant-container w-full flex justify-start ">
            <div className="restaurant-image w-full">DEV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-container w-full">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
