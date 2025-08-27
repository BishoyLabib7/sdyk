import React from "react";
import { GrCertificate } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbUserScreen } from "react-icons/tb";

export default function Services() {
  return (
    <div className="mt-20 p-8 flex flex-col items-end">
      <div className="lg:w-[50%] w-full lg:h-[60vh] bg-[#525D53] rounded-4xl text-right text-white p-8 flex flex-col justify-center lg:items-end items-center gap-3 relative">
        <h2 className=" text-3xl font-bold my-4 text-shadow-black  z-50">
          هل تحتاج إلى القيام بشيء ما؟
        </h2>
        <p className="text-xl z-50 text-shadow-black">
          الخدمات الأكثر مشاهدة والأكثر مبيعًا على الإطلاق
        </p>
        <div className="flex gap-4 mt-8 z-50 lg:flex-row flex-col">
          <div className="bg-white flex flex-col justify-center items-end p-8 rounded-3xl gap-5 text-green-800">
            <GrCertificate className="size-10" />
            <h3>متاح في كل الاوقات </h3>
            <p>الخبرات الموجوده متوفره و معدده في كل وقت</p>
          </div>
          <div className="bg-white flex flex-col justify-center items-end p-8 rounded-3xl gap-5 text-green-800">
            <TbUserScreen className="size-10" />
            <h3>اختر الخبره المناسبه لك</h3>
            <p>يتواجد جميع الخبرات في كل القطاعات</p>
          </div>
          <div className="bg-white flex flex-col justify-center items-end p-8 rounded-3xl gap-5 text-green-800">
            <RiSecurePaymentLine className="size-10" />
            <h3>ابحث عن خبرات</h3>
            <p>تسطتيع معنا ان تبحث عن الخبرات التي تحتاجها لتحقيق احلامك</p>
          </div>
        </div>
        <img
          className=" absolute right-[80%] hidden lg:block"
          src="/Services.webp"
          alt=""
        />
      </div>
    </div>
  );
}
