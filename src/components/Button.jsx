import React from "react";

export default function Button({
  text = "Button",
  onClick,
  type = "primary",
  style = "",
}) {
  return (
    <button
      className={`${
        type === "primary"
          ? "text-[#3A473C] bg-[#F9FCAA] hover:bg-[#5BBB7B] hover:text-[#fff]"
          : "border border-amber-50 bg-none text-[#fff]"
      }  font-bold py-2 px-8 rounded-full  transition duration-300 cursor-pointer ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
