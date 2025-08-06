import React, { use } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Card({
  title,
  description,
  name,
  image,
  userImage,
  num = "4.86",
  type = "offer",
}) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white m-3 rounded-2xl cursor-pointer"
      onClick={() => navigate(`/${type}`)}
    >
      <div className=" flex flex-col items-end justify-end p-4 gap-3 ">
        <img className="rounded-2xl " src={image} alt="" />
        <h3 className="text-sm font-semibold text-gray-400 ">{title}</h3>
        <p className="text-sm text-right">{description}</p>
      </div>
      <div className="flex flex-col justify-end p-4">
        <div className="flex items-center gap-2">
          {num === 4.89 && <FaStar className="text-yellow-300" />}
          <span> {num}</span>
        </div>
        {name && (
          <div className="border-t border-gray-300 my-2 pt-3 flex  items-center gap-3 ">
            <img className="size-5 rounded-full" src={userImage} alt="" />
            <p>{name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
