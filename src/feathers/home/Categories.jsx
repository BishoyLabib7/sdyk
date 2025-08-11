import React from "react";
import { BsTranslate } from "react-icons/bs";
import CategoryCard from "./CategoryCard";
import { MdDesignServices, MdOutlineEngineering } from "react-icons/md";
import { LiaFileVideoSolid, LiaLaptopCodeSolid } from "react-icons/lia";
import { GiBugleCall, GiNetworkBars } from "react-icons/gi";
import { AiFillAudio } from "react-icons/ai";
import { Link } from "react-router";

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
    <div className="flex flex-col items-center justify-between my-5">
      <div className=" w-[80%] flex flex-row-reverse items-center justify-between p-8">
        <h2 className="text-2xl font-bold text-gray-800">
          تصفح المواهب حسب الفئة
        </h2>
        <Link to="services">
          <p className=" text-gray-600 lg:block hidden">&#8592; التخصصات </p>
        </Link>
      </div>
      <div className="w-[70%] grid md:grid-cols-4 gap-6">
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
  );
}
