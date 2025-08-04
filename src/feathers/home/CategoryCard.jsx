import React from "react";
import { BsTranslate } from "react-icons/bs";

export default function CategoryCard({ icon, title, descraption }) {
  return (
    <div className="bg-[#525D53] text-amber-50 rounded-4xl flex flex-col cursor-pointer gap-0">
      <div className="flex flex-row items-center justify-center">
        {" "}
        <div className="pt-5 pb-3 px-4">{icon}</div>
        <h3 className="">
          <span>مهارة</span> 1500
        </h3>
      </div>

      <p className="text-right pb-5 px-3 text-gray-300"> {descraption}</p>
    </div>
  );
}
