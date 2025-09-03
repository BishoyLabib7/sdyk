import React from "react";
import { Link } from "react-router";
import { prouducts } from "../constants";
import toast from "react-hot-toast";

export default function CheckOut() {
  return (
    <div className="lg:w-[90%] w-full mx-auto mt-20 p-10">
      <div className="w-full flex justify-between ">
        <Link to="/shop">
          <button className="text-center cursor-pointer border-1 border-b-neutral-800-200 lg:text-xl text-lg px-5  rounded-lg py-2">
            رجوع للمتجر
          </button>
        </Link>

        <h2 className="lg:text-3xl text-xl font-bold mb-4 text-right">
          تفاصيل الدفع
        </h2>
      </div>

      <div className="w-full flex justify-between lg:flex-row-reverse flex-col mt-10">
        {/* infomation */}
        <div
          className="lg:w-[50%] w-full rounded-lg shadow-lg flex flex-col justify-end gap-10 p-5"
          dir="rtl"
        >
          <h1 className="font-semibold text-xl">اكمل البيانات</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-thirdBg font-semibold">
              الاسم كامل
            </label>
            <input type="text" className="bg-white rounded-lg p-2 w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-thirdBg font-semibold">
              اسم الشركه
            </label>
            <input type="text" className="bg-white rounded-lg p-2 w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-thirdBg font-semibold">
              العنوان
            </label>
            <input type="text" className="bg-white rounded-lg p-2 w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-thirdBg font-semibold">
              الهاتف
            </label>
            <input type="text" className="bg-white rounded-lg p-2 w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-thirdBg font-semibold">
              البريد الالكتروني
            </label>
            <input type="text" className="bg-white rounded-lg p-2 w-full" />
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" className="size-4 rounded-lg" />
            <p>احفظ هذه المعلومات لسرعه الدفع المره القادمه</p>
          </div>
        </div>
        {/* cart */}
        <div
          dir="rtl"
          className="rounded-lg shadow-lg lg:w-[30%] w-full flex flex-col p-5"
        >
          {prouducts.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-4 ">
              <div className="flex items-center space-x-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <span className="text-lg font-medium">{product.name}</span>
              </div>
              <span className="text-lg font-semibold text-red-700">
                ${product.price}
              </span>
            </div>
          ))}
          <div className="flex justify-between mt-5 border-b-2 border-green-400 pb-2">
            <p className="font-semibold">الكلى</p>{" "}
            <p className="text-red-800 font-bold">$1750</p>
          </div>
          <div className="flex justify-between mt-5 border-b-2 border-green-400 pb-2">
            <p className="font-semibold">الشحن</p>{" "}
            <p className="text-red-800 font-bold">FREE</p>
          </div>
          <div className="flex justify-between mt-5 pb-2">
            <p className="font-semibold">المجموع</p>{" "}
            <p className="text-red-800 font-bold">$1750</p>
          </div>{" "}
          <div className="flex items-center space-x-2 my-4 ">
            <input
              type="radio"
              id="bank"
              name="payment_option"
              className="form-radio h-5 w-5  transition duration-150 ease-in-out"
            />
            <label htmlFor="bank" className="text-lg font-medium">
              بنك
            </label>
            <div className="flex-grow"></div>
            <div className="flex items-center space-x-2">
              <img
                src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg"
                alt="bKash"
                className="h-6 object-contain"
              />
              <img
                src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
                alt="Visa"
                className="h-6 object-contain"
              />
              <img
                src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg"
                alt="Mastercard"
                className="h-6 object-contain"
              />
              <img
                src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
                alt="Nagad"
                className="h-6 object-contain"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="cash"
              name="payment_option"
              value="cash"
              className="form-radio h-5 w-5  transition duration-150 ease-in-out"
            />
            <label htmlFor="cash" className="text-lg font-medium">
              الدفع كاش
            </label>
          </div>
          <Link to="/shop">
            <div
              className="text-center cursor-pointer bg-primaryBg text-white rounded-lge font-extrabold text-xl py-3 px-10 rounded-lg mt-5"
              onClick={() => toast.success("تم الطلب بنجاح")}
            >
              دفع الان
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
