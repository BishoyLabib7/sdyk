import React from "react";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <div className="text-amber-50 px-7">
      <div className="container mx-auto flex px-5 py-15 md:flex-row  flex-col justify-start items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-3/6 mb-10 md:mb-0">
          <img className="w-[90%]" alt="hero" src="/hero.png" />
        </div>
        <div className="md:w-2/3 flex flex-col md:items-end md:text-left items-start gap-10 ">
          <h1 className="text-right title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-50 leading-15">
            احجز الان لتكون مع افضل الخبراء <br />
            المتاحين في مجالاتهم
          </h1>

          <div className="flex lg:flex-row-reverse md:flex-col gap-6">
            {" "}
            <Button text="انضم كخبير" style="py-4 " />
            <Button
              text="اكتشف خبرات"
              type="secounder"
              style="hover:bg-[#5bbb7b61]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
