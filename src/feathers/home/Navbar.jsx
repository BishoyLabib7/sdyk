import React from "react";
import Button from "../../components/Button";

export default function Navbar() {
  return (
    <>
      <div class="text-amber-50 body-font">
        <div class="container mx-auto flex  flex-wrap p-5 flex-col md:flex-row-reverse items-center">
          <div className="size-20	flex flex-row-reverse flex-wrap items-center justify-center">
            <img src="/logo.png" alt="" />
          </div>

          <nav class="md:ml-auto md:mr-4 md:py-1 md:pr-4 md:border-r md:border-gray-400	flex flex-row-reverse flex-wrap items-center text-xl justify-between cursor-pointer gap-10">
            <a class="mr-5 hover:text-[#F9FCAA]">الرئيسيه</a>
            <a class="mr-5 hover:text-[#F9FCAA]">المتجر</a>
            <a class="mr-5 hover:text-[#F9FCAA]">بطاقات الخصم </a>
            <a class="mr-5 hover:text-[#F9FCAA]">الاخبار</a>
            <a class="mr-5 hover:text-[#F9FCAA]">الخبرات</a>
          </nav>

          <div className="flex flex-row-reverse justify-between items-center gap-4">
            <Button text="انضمام" />
            <Button text="تسجيل دخول" type="secounder" />
          </div>
        </div>
      </div>
    </>
  );
}
