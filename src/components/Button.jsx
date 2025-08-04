import React from "react";

export default function Button({
  text = "Button",
  onClick,
  type = "primary",
  style = "",
  reverse = false,
}) {
  return (
    <button
      className={`${
        type === "primary"
          ? "text-[#3A473C] bg-[#F9FCAA] hover:bg-[#5BBB7B] hover:text-[#fff]"
          : `border ${
              reverse
                ? "border-amber-900 text-[#222222]"
                : "border-amber-50 text-[#fff]"
            }bg-none `
      }  font-bold py-2 px-8 rounded-full  transition duration-300 cursor-pointer ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
