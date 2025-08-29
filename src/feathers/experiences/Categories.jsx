import React, { useState } from "react";

import Dropdown from "../../components/Dropdown";

const optionsData = [
  { value: "streaming", label: "منصات البثّ" },
  { value: "saas", label: "شركات البرمجيات" },
  { value: "fitness_apps", label: "تطبيقات الرياضة والصحة" },
  { value: "online_magazines", label: "الجرائد والمجلات الإلكترونية" },
  { value: "telecom", label: "شركات الإنترنت والموبايل" },
  { value: "cloud_storage", label: "خدمات التخزين السحابي" },
  { value: "sports_clubs", label: "الأندية الرياضية" },
  { value: "online_learning", label: "خدمات التعلم أونلاين" },
  { value: "gaming_services", label: "خدمات الألعاب" },
  { value: "paid_newsletters", label: "النشرات البريدية المدفوعة" },
];

export default function Categories({ handleOpen, type = "/service" }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="w-full flex lg:flex-row-reverse flex-col gap-5 justify-center items-center">
      <Dropdown optionsData={optionsData} />

      <div className="w-[80%] max-w-md relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Search Input */}
        <div className="flex w-full gap-10">
          <button
            onClick={() => handleOpen((open) => !open)}
            className=" xl:hidden block w-full rounded-md text-white border border-gray-300 bg-[#5BBB7B] pl-10 pr-4 py-2 text-center shadow-sm transition-colors duration-300 placeholder-gray-400 focus:border-green-500 focus:outline-none"
          >
            {type === "/friends" ? "طلبات الصداقة" : "تصفية الخبراء"}
          </button>
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder="ابحث عن خبير"
            className="w-full rounded-md text-right border border-gray-300 bg-white pl-10 pr-4 py-2 text-gray-700 shadow-sm transition-colors duration-300 placeholder-gray-400 focus:border-green-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
