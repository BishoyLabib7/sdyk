import React from "react";
import { BsTranslate } from "react-icons/bs";
import CategoryCard from "./CategoryCard";
import { MdDesignServices, MdOutlineEngineering } from "react-icons/md";
import { LiaFileVideoSolid, LiaLaptopCodeSolid } from "react-icons/lia";
import { GiBugleCall, GiNetworkBars } from "react-icons/gi";
import { AiFillAudio } from "react-icons/ai";

const Category = [
  {
    icon: <BsTranslate className="size-8 " />,
    title: "1500 مهارة",
    description: "اللغات و الترجمة",
  },
  {
    icon: <GiBugleCall className="size-8 " />,
    title: "1500 مهارة",
    description: "البيعات و التسويق",
  },
  {
    icon: <MdDesignServices className="size-8 " />,
    title: "1500 مهارة",
    description: "تصميم و ابداع ",
  },
  {
    icon: <LiaLaptopCodeSolid className="size-8 " />,
    title: "1500 مهارة",
    description: "التطوير و تكنولوجيا المعلومات ",
  },
  {
    icon: <GiNetworkBars className="size-8 " />,
    title: "1500 مهارة",
    description: "المحاسبه و الماليات",
  },
  {
    icon: <MdOutlineEngineering className="size-8 " />,
    title: "1500 مهارة",
    description: "الهندسه و المعمار",
  },
  {
    icon: <LiaFileVideoSolid className="size-8 " />,
    title: "1500 مهارة",
    description: "الفيديوهات و الرسوم المتحركه",
  },
  {
    icon: <AiFillAudio className="size-8 " />,
    title: "1500 مهارة",
    description: "الصوتيات و الموسيقي",
  },
];

export default function Categories() {
  return (
    <div className="flex flex-col items-center justify-between  my-10">
      <div className=" w-[80%] flex flex-row-reverse items-center justify-between p-8">
        <h2 className="text-2xl font-bold text-gray-800">
          تصفح المواهب حسب الفئة
        </h2>
        <a href="">
          <p className=" text-gray-600 lg:block hidden">&#8592; التخصصات </p>
        </a>
      </div>
      <div className="w-full flex lg:flex-row-reverse flex-col flex-wrap items-center justify-start gap-30 ">
        <div className="lg:w-[10%] w-[60%] py-10 bg-[#525D53] rounded-4xl lg:rounded-r-none ">
          <ul className=" flex lg:flex-col md:flex-row-reverse flex-col items-end lg:justify-start justify-center gap-3">
            <li className="bg-[#ffede8] rounded-tl-4xl rounded-bl-4xl  py-5 lg:px-10 md:px-5 px-15 text-[#222222] mb-2 cursor-pointer ">
              جمعيات
            </li>
            <li className="bg-[#ffede8] rounded-tl-4xl rounded-bl-4xl  py-5 llg:px-10 md:px-5 px-15  text-[#222222] mb-2 cursor-pointer ">
              مشاريع
            </li>
            <li className="bg-[#ffede8] rounded-tl-4xl rounded-bl-4xl  py-5 llg:px-10 md:px-5 px-15  text-[#222222] mb-2 cursor-pointer ">
              اعلانات
            </li>
            <li className="bg-[#ffede8] rounded-tl-4xl rounded-bl-4xl  py-5 llg:px-10 md:px-5 px-15  text-[#222222] mb-2 cursor-pointer ">
              اخرى
            </li>
          </ul>
        </div>
        <div className="w-[70%] grid md:grid-cols-4  gap-6">
          {Category.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              descraption={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
