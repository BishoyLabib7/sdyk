import React from "react";
import Button from "./Button";

import { GoStarFill } from "react-icons/go";
import { Link } from "react-router";

export default function ExpertCard({
  img = "/person.webp",
  name,
  jop,
  stars,
  experiences,
  price,
  appointment,
  id,
}) {
  return (
    <div className="flex md:flex-row-reverse flex-col justify-center items-center w-full bg-white p-5 rounded-2xl gap-5 my-5">
      <div className="lg:w-[60%] md:border-l-2 border-l-green-200 flex flex-col">
        <div className="flex flex-row-reverse gap-8">
          <img
            loading="lazy"
            className="md:w-30 w-20 rounded-full"
            src={img}
            alt=""
          />
          <div className="flex flex-col text-right">
            <h3 className="font-bold text-xl mb-3">{name}</h3>
            <p className="mb-5">{jop}</p>
            <div className="flex flex-row-reverse gap-10">
              <p className="flex items-center gap-1">
                {stars}
                <span>
                  <GoStarFill className="text-green-400" />
                </span>
              </p>
              <p className="flex flex-row-reverse items-center gap-1">
                {experiences} <span> سنوات خبرة</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-right mt-5">اسعار</h4>
          <div className="flex gap-10 justify-end">
            <div>{price?.half} جنيه / 30 دقيقة</div>
            <div>{price?.full} جنيه / 60 دقيقة</div>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] ">
        <h3 className="font-bold m-4 text-right">اقرب معاد</h3>
        <div className="flex flex-row-reverse justify-around gap-8">
          <div className="flex flex-col  border border-green-200 rounded-xl">
            <div className="p-2 flex flex-row-reverse bg-green-400 rounded-t-xl gap-5">
              <div>: التاريخ</div>
              <div> {appointment.day}</div>
            </div>
            <div className="p-2 text-center"> {appointment.time}</div>
          </div>
          <div className="flex flex-col gap-5">
            <Button
              text="إحجز الموعد
"
              style=" md:text-[1rem]  text-sm"
              type="primary"
            />
            <Link to={`/chat/${id}`}>
              <Button
                text="ارسال رسالة"
                type="sec"
                style="text-green-800 border-green-700 md:text-[1rem] text-sm"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
