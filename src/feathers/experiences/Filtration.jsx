import React, { useState } from "react";
import Button from "../../components/Button";
const types = [
  { type: " موعد الجلسة", f1: "اليوم", f2: "غدا", f3: "كل الأوقات" },
  { type: "مدة الجلسة", f1: "نصف ساعة", f2: "ساعة", f3: "الجميع" },
  { type: " الحالة", f1: "متاح الان", f2: "غير متاح الآن", f3: "الجميع" },
];

export default function Filtration({ open, setOpen }) {
  const [fee, setFee] = useState(0);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        {open && (
          <div className="fixed mt-20 inset-0 z-50 flex items-center justify-center bg-[#5bbb7bbf] bg-opacity-50">
            <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-x">
              {/* Modal Header */}
              <div className="flex flex-row-reverse items-center justify-between border-b pb-3">
                <h3 className="text-xl font-semibold text-black">تصفية</h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body (Settings content) */}
              <div className=" flex flex-col justify-end items-end gap-5">
                {types.map((type) => (
                  <div className="flex flex-col justify-center items-end gap-2 mt-5">
                    <h4>{type.type}</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <button className=" cursor-pointer  text-sm text-white bg-[#5BBB7B] rounded-xl px-4 py-1">
                        {type.f3}
                      </button>
                      <button className="hover:bg-[#5BBB7B] hover:text-[#fff] transition duration-300 cursor-pointer text-sm border boreder-[#5BBB7B] rounded-xl px-4 py-1">
                        {type.f2}
                      </button>
                      <button className="hover:bg-[#5BBB7B] hover:text-[#fff] transition duration-300 cursor-pointer text-sm border boreder-[#5BBB7B] rounded-xl px-4 py-1">
                        {type.f1}
                      </button>
                    </div>
                  </div>
                ))}
                <div className="w-full flex flex-col gap-3 my-5">
                  <label htmlFor="sessionfees" className="text-right">
                    ثمن الجلسة
                  </label>
                  <div className="text-sm text-center border boreder-[#5bbb7b45] rounded-sm px-4 py-1">
                    جنية 5000- {fee}
                  </div>
                  <input
                    type="range"
                    name="sessionfees"
                    min="0"
                    value={fee}
                    step="100"
                    max="5000"
                    className="accent-[#5bbb7b45]"
                    onChange={(e) => setFee(e.target.value)}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-row-reverse justify-start gap-3 space-x-2 border-t pt-3">
                <button
                  onClick={handleClose}
                  className="rounded-md bg-green-200 px-4 py-2 text-gray-800 transition-colors duration-200 hover:bg-green-300"
                >
                  الغاء
                </button>
                <button
                  onClick={handleClose}
                  className="rounded-md bg-green-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-green-700"
                >
                  حفظ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="lg:flex hidden flex-col justify-end items-end gap-5">
        <h3 className="font-bold text-xl">تصفية</h3>
        {types.map((type) => (
          <div className="flex flex-col justify-center items-end gap-2">
            <h4>{type.type}</h4>
            <div className="grid grid-cols-3 gap-3">
              <button className=" cursor-pointer  text-sm text-white bg-[#5BBB7B] rounded-xl px-4 py-1">
                {type.f3}
              </button>
              <button className="hover:bg-[#5BBB7B] hover:text-[#fff] transition duration-300 cursor-pointer text-sm border boreder-[#5BBB7B] rounded-xl px-4 py-1">
                {type.f2}
              </button>
              <button className="hover:bg-[#5BBB7B] hover:text-[#fff] transition duration-300 cursor-pointer text-sm border boreder-[#5BBB7B] rounded-xl px-4 py-1">
                {type.f1}
              </button>
            </div>
          </div>
        ))}
        <div className="w-full flex flex-col gap-3 my-5">
          <label htmlFor="sessionfees" className="text-right">
            ثمن الجلسة
          </label>
          <div className="text-sm text-center border boreder-[#5bbb7b45] rounded-sm px-4 py-1">
            جنية 5000- {fee}
          </div>
          <input
            type="range"
            name="sessionfees"
            min="0"
            value={fee}
            step="100"
            max="5000"
            className="accent-[#5bbb7b45]"
            onChange={(e) => setFee(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
