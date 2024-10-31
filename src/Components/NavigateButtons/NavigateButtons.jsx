import React from "react";

function NavigateButtons() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirt",
    "Jeans",
    "Jacket",
    "Bags",
  ];
  return <div>
    <div className="flex items-center justify-center py-8">
        {buttons.map((button,index)=>{
            return <div></div>
        })}
    </div>
  </div>;
}

export default NavigateButtons;
