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
          : `border-2 ${
              reverse
                ? " border-black text-green-800"
                : "border-green-50 text-[#fff] "
            } bg-none`
      }  font-bold md:py-2 py-1 md:px-8 px-5 rounded-full  transition duration-300 cursor-pointer ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
