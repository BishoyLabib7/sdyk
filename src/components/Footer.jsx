import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaApple, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Footer() {
  return (
    <div className=" text-white p-4 m-8 rounded-4xl backgroud-clip flex flex-col items-center justify-center">
      <div className="flex lg:flex-row-reverse flex-col items-center justify-between w-[80%] mt-40 border-b-2 border-[#5b665c] pb-4 lg:gap-0 gap-10">
        <div className="flex items-start gap-10 font-bold">
          <h3>شروط الخدمة</h3>
          <h3>سياسة الخصوصية</h3>
          <h3>خريطة الموقع</h3>
        </div>
        <div className="flex flex-row-reverse items-center gap-5 font-bold">
          <h3>تابعنا </h3>
          <FaFacebook />
          <FaTwitter />
          <BsInstagram />
          <FaLinkedin />
        </div>
      </div>

      <div className="flex flex-row-reverse items-start justify-evenly w-[80%] p-3 mt-10">
        <div className="lg:flex flex-col items-end gap-3 hidden">
          <h3 className="font-bold mb-5">عن</h3>
          <p className=" text-[#a6acb19e]">الوظائف</p>
          <p className=" text-[#a6acb19e]">الصحافة والأخبار</p>
          <p className=" text-[#a6acb19e]">الشراكات</p>
          <p className=" text-[#a6acb19e]">سياسة الخصوصية</p>
          <p className=" text-[#a6acb19e]">شروط الخدمة</p>
          <p className=" text-[#a6acb19e]">علاقات المستثمرين</p>
        </div>
        <div className="lg:flex flex-col items-end gap-3 hidden">
          <h3 className="font-bold mb-5">فئات</h3>
          <p className=" text-[#a6acb19e]">الرسومات والتصميم</p>
          <p className=" text-[#a6acb19e]">التسويق الرقمي</p>
          <p className=" text-[#a6acb19e]">الكتابة والترجمة</p>
          <p className=" text-[#a6acb19e]">الفيديو والرسوم المتحركة</p>
          <p className=" text-[#a6acb19e]">الموسيقى والصوت</p>
          <p className=" text-[#a6acb19e]">البرمجة والتكنولوجيا</p>
          <p className=" text-[#a6acb19e]">بيانات</p>
          <p className=" text-[#a6acb19e]">نمط الحياة</p>
        </div>
        <div className="lg:flex flex-col items-end gap-3 hidden">
          <h3 className="font-bold mb-5">يدعم</h3>
          <p className=" text-[#a6acb19e]">المساعدة والدعم</p>
          <p className=" text-[#a6acb19e]">الثقة والأمان</p>
          <p className=" text-[#a6acb19e]">الشراكات</p>
          <p className=" text-[#a6acb19e]">البيع على صديق</p>
          <p className=" text-[#a6acb19e]">شراء على صديق</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="flex flex-col items-end gap-3 relative">
            <h3 className="font-bold">اشتراك</h3>
            <input
              type="email"
              placeholder="البريد الالكترونى"
              className="bg-[#48544a] text-right px-5 py-3 rounded-sm outline-none border-none"
            />
            <button className="bg-[#48544a] text-right  px-5 py-3 rounded-sm absolute right-50 top-9  ">
              ارسال
            </button>
          </div>
          <div className="flex flex-col items-end gap-3 mt-8">
            <h3 className="font-bold">التطبيقات</h3>

            <div className="flex items-center gap-2 text-[#a6acb19e]">
              <a href=""> تطبيق iOS</a>
              <span>
                <FaApple />
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#a6acb19e]">
              <a href=""> تطبيق أندرويد</a>
              <span>
                <IoLogoGooglePlaystore />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] text-[#a6acb19e] p-3 text-center border-t-2 border-[#5b665c] pb-4 font-semibold">
        © جميع الحقوق محفوظة لاصديق 2025
      </div>
    </div>
  );
}
