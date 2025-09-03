import React, { useState } from "react";
import Button from "./Button";

import { GoStarFill } from "react-icons/go";
import { useNavigate } from "react-router";
import useSendRequest from "../hooks/useSendRequest";
import useAuthUser from "../hooks/useAuthUser";

export default function ExpertCard({
  img = "/person.webp",
  name,
  jop = "مهندس مدني",
  stars = 4,
  experiences = 3,
  price = 450,
  appointment = { time: "5 مساءا", day: "15 اغسطس" },
  id,
  type = "/services",
}) {
  const { sendFriendRequest } = useSendRequest();
  const navigate = useNavigate();
  const { authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;
  const [onclickButton, setonclicButton] = useState(false);
  function handleButton() {
    if (type === "/services") {
      handleSendRequest();
      setonclicButton(true);
    } else {
      handleChat();
    }
  }

  function handleSendRequest() {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (isAuthenticated && !isOnboarded) {
      navigate("/onboarding");
    } else sendFriendRequest(id);
  }

  function handleChat() {
    navigate(`/chat/${id}`);
  }

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
          <div className="px-5 flex gap-10 justify-end items-center mt-2 text-green-800 text-lg">
            <div dir="rtl">{price} جنيه / 60 دقيقة</div>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%]">
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
              text={type === "/services" ? "من انا" : "إبدأ الدردشة"}
              style={` text-sm ${
                type === "/services" ? "md:text-[1rem]" : "md:text-[1.5rem] "
              }`}
              type="primary"
              onClick={() => type !== "/services" && handleButton()}
            />
            {type === "/services" && (
              <button
                type="button"
                onClick={() => handleButton()}
                className={`border font-bold md:py-2 py-1 md:px-8 px-5 rounded-full  transition duration-300 text-green-800 border-green-700 md:text-[1rem] text-sm ${
                  onclickButton ? "cursor-not-allowed" : "cursor-pointer"
                } text-center disabled:bg-gray-300`}
                disabled={onclickButton}
              >
                {type === "/services"
                  ? onclickButton
                    ? "تم ارسال طلب الصداقة"
                    : "طلب صداقة"
                  : "ارسال رسالة"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NoData() {
  return (
    <div>
      <img src="/no data.jpg" alt="no requests" className="mx-auto w-1/2" />
      <h3 className="text-center text-xl font-semibold text-primaryBg">
        لا يوجد اصدقاء
      </h3>
    </div>
  );
}
