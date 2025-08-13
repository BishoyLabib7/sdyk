import React from "react";
import Button from "./Button";

export default function PersonalCard({ name, jop, img = "/person.jpg" }) {
  return (
    <div
      className={`bg-white m-5 text-right rounded-2xl cursor-pointe `}
      // onClick={() => navigate(`/${type}`)}
    >
      <div className=" flex flex-col items-center justify-center p-1 gap-1 ">
        <div className="flex justify-center items-center relative after:ml-0.5 after:bg-green-500 after:rounded-full after:size-5 after:absolute after:bottom-3 after:right-0 after:content-[' ']">
          <img className="w-25 rounded-full" src={img} alt="" />
        </div>
        <h3 className="text-xl font-bold text-black ">{name}</h3>
        <p className="text-sm text-right">{jop}</p>
        <Button text="ابدأ الجلسة" style="my-5" />
      </div>
    </div>
  );
}
