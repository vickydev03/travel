import React from "react";

function TopBar() {
  const text = "Christmas & New Year sale, Up to ₹ 5000 off";
  return (
    <div className="py-1 md:py-2 px-2 gold-gradient-soft w-full text-secondary-text ">
      <p className="text-sm font-medium tracking-wider text-center">{text}</p>
    </div>
  );
}

export default TopBar;
