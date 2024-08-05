import React from "react";
import { useState } from "react";
import "../Flipcard.css";
import gd from "../assets/gd.png";

const Card3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
      <div className={`card ${isHovered ? "flipped" : ""}`}>
        <div className="front flex flex-col">
          <div className="flex items-center justify-center mt-20">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVR4nO2Zz4tOURzGv4MiiS3zI/kxjB8lTTb+ASSxslNjGsNI0pSys1I2s5GysGAyzGiShKwshqWsbCilZjCUN6QsRuaj0/u8uel97/vO63vve0/Np+7m3nue5/vUOeeec67ZIgUDOAi8J52vwDOgD2izIgJ8YGGMFTIMMJMocrrK8zagHTgB/NB7x6xoAAcUZhrYX+fdQQV5aTEDLAe+KMw2ixnKYyQwZDFDeawEJixmgC0K8rmQs1eTU3aPxQxwR0FOWcwAJxVk3GIG6FGQ2cVxUhSACVrPc48gQ61OAbz1CLJdYrP/LbZw75vyvughFlbFnyS41aXCBgBWaRU+D2z0Ep1UkEEXwQYA+uX51LwAzkj0tptoHcIAd98TATsl+tFNNAWgW13qO7DSvNA4CYvHQLebcA2AS/K6bt4A9yQ+4C6eAFiiXWxgr3kDnJX4LXfxBMA++bzJZFkE7JLBjLt49ZXEBcsCjZPKPn5TRh5rgJ/Ab6ArC4+K0X0F6c9I/7T0n2ShnzQ6J6PRjPRfSP9oFvpJo921DvgctHdIuwSs8NavNjUGo8AGZ+0R6V711E0zfCDDPkfNZdqFBnq9dOuZDsvwhqPmYWm+8tJsxLRXpu8ymA2HvTQbMV2q/yje/ALW5hZEYR46h5gHruQaQkHOq4BrFjPAHgV5bTFDeboMm55Au8UMf78nxy1mgAEFmbKYAVYnliuXgfVharYYAY4Ac47T8FQrwxxyDDIHrGtVkFEVET6SHboepf1XAcZT2ozln6JcVGXV2pG416V7pRptSiltvuVV+79FVb4nnY0WRRNtMidx3hW6Rqeux7o36dUmr9/YldOVJKH7bPZqY3mgwXpXXSZc4fQ+taBm2gT+AHVAko/0/qP/AAAAAElFTkSuQmCC"></img>
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            FakeStore is a React-based e-commerce platform where users can
            browse through a collection of jewelry products fetched from the
            FakeStore API, add items to their cart, and view their cart
            contents.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              In FakeStore, users can: Browse through a collection of jewelry
              products fetched from the FakeStore API. Add items to their cart
              and adjust the quantity of each item. View their cart contents and
              remove items from the cart. See real-time updates of the total
              number of items in the cart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
