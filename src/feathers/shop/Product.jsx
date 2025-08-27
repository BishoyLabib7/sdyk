import Section from "./Section";
import { HeartPlus, RefreshCcw, Star, Truck } from "lucide-react";
import Stars from "../../components/Stars";
import Slider from "react-slick";
import SampleNextArrow from "../../components/Arrows";
const prouducts = [
  {
    id: 1,
    name: "لوحة ألعاب HAVIT HV-G92",
    price: 960,
    oldPrice: 1160,
    img: "/shop/p5.png",
    rate: 4,
  },
  {
    id: 2,
    name: "لوحة مفاتيح سلكية AK-900",
    price: 200,
    img: "/shop/p6.png",
    rate: 2,
  },
  {
    id: 3,
    name: "مبرد وحدة المعالجة المركزية  ",
    price: 550,
    img: "/shop/p7.png",
    rate: 5,
  },
  {
    id: 4,
    name: "كمبيوتر محمول للألعاب ",
    price: 960,
    oldPrice: 1160,
    img: "/shop/p8.png",
    rate: 3,
  },
];
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

export default function Product() {
  return (
    <>
      <div className="md:w-[80%] min-h-screen flex flex-col justify-center items-center mx-auto my-30">
        <div
          dir="rtl"
          className="w-full flex lg:flex-row flex-col justify-content-center align-items-center gap-5 my-5 "
        >
          <div dir="rtl" className="flex flex-col gap-5 px-10">
            <h1 className="font-bold">وحدة تحكم الألعاب Havit HV G92</h1>
            <div className="flex gap-2">
              <Stars rate={4} />
              <p>(150 تقييمًا)</p>
              <p>| في الأوراق المالية</p>
            </div>
            <h2 className="text-red-600 font-semibold text-lg">$192.00</h2>
            <p className="border-b-1 border-[#5b665c2d] w-full  pb-5">
              معلومات عن هذا المنتج و تفاصيله و وصف كامل لطل ما يريد البائع ان
              يحدده لهذا المنتج من بينات{" "}
            </p>

            <div className="flex gap-5">
              <h3> الحجم</h3>
              <div className="flex gap-2">
                <div className="text-center cursor-pointer w-7 h-7 rounded-lg border-2 border-primaryBg">
                  S
                </div>
                <div className=" text-center cursor-pointer w-7 h-7 rounded-lg border-2 border-primaryBg">
                  M
                </div>
                <div className=" text-center cursor-pointer text-white bg-primaryBg w-7 h-7 rounded-lg border-2 border-primaryBg">
                  L
                </div>
                <div className=" text-center cursor-pointer  w-7 h-7 rounded-lg border-2 border-primaryBg">
                  XL
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <h3> الوان</h3>
              <div className="flex gap-2">
                <div className=" cursor-pointer bg-blue-500 w-6 h-6 rounded-full "></div>
                <div className=" cursor-pointer bg-red-500 w-6 h-6 rounded-full "></div>
                <div className=" cursor-pointer bg-green-500 w-6 h-6 rounded-full "></div>
                <div className=" cursor-pointer bg-yellow-500 w-6 h-6 rounded-full "></div>
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="flex border-2 border-primaryBg rounded-sm">
                <button className="cursor-pointer border-l-2 text-xl font-semibold bg-primaryBg text-white border-primaryBge rounded-l-sm px-2">
                  +
                </button>

                <p className="px-5 py-1">2</p>

                <button className="cursor-pointer border-r-2 text-xl font-semibold  border-primaryBg rounded-sm px-2">
                  -
                </button>
              </div>
              <button className="cursor-pointer border-1  bg-primaryBg text-white border-primaryBge rounded-lg px-5">
                اشترى الان
              </button>
              <button className="cursor-pointer border-2    border-primaryBge rounded-lg px-2">
                <HeartPlus />
              </button>
            </div>

            <div className="w-full flex flex-col gap-5 border-1 border-primaryBg rounded-sm justify-content-center items-center">
              <div className="w-full border-b-1 border-primaryBg flex justify-content-center items-center gap-5 p-5">
                {" "}
                <Truck />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold ">توصيل مجاني</h3>
                  <p className="text-sm">
                    أدخل الرمز البريدي الخاص بك لمعرفة إمكانية التوصيل
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-content-center items-center gap-5 px-5 pb-5">
                {" "}
                <RefreshCcw />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold ">تسليم الإرجاع</h3>
                  <p className="text-sm">إرجاع مجاني خلال 30 يومًا. التفاصيل</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-5 flex-1/2 bg-white lg:flex justify-center items-center  hidden">
            <img loading="lazy" src="/shop/showP1.png" alt="" />
          </div>

          <div className="p-5 flex-1/6 lg:flex flex-col gap-5 hidden ">
            <img
              className="size-30 cursor-pointer bg-white p-5 rounded-lg"
              src="/shop/showP2.png"
              alt=""
            />
            <img
              className="size-30 cursor-pointer bg-white p-5 rounded-lg"
              src="/shop/showP3.png"
              alt=""
            />
            <img
              className="size-30 cursor-pointer bg-white p-5 rounded-lg"
              src="/shop/showP4.png"
              alt=""
            />
            <img
              className="size-30 cursor-pointer bg-white p-5 rounded-lg"
              src="/shop/showP5.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-[90%] mx-auto lg:hidden block  ">
          <Slider className="" {...settings}>
            <div className="w-[90%] bg-white flex justify-center items-center p-10 rounded-3xl">
              <img
                className="w-[80%] cursor-pointer p-5 rounded-lg"
                src="/shop/showP2.png"
                alt=""
              />{" "}
            </div>{" "}
            <div className="w-[90%] bg-white flex justify-center items-center p-10 rounded-3xl">
              <img
                className=" w-[80%] cursor-pointer p-5 rounded-lg"
                src="/shop/showP3.png"
                alt=""
              />{" "}
            </div>{" "}
            <div className="w-[90%] bg-white flex justify-center items-center p-10 rounded-3xl">
              <img
                className=" w-[80%] cursor-pointer p-5 rounded-lg"
                src="/shop/showP4.png"
                alt=""
              />{" "}
            </div>{" "}
            <div className="w-[90%] bg-white flex justify-center items-center p-10 rounded-3xl">
              <img
                className=" w-[80%] cursor-pointer p-5 rounded-lg"
                src="/shop/showP5.png"
                alt=""
              />{" "}
            </div>
          </Slider>
        </div>

        <Section title="منتجات شائعه" products={prouducts} />
      </div>
    </>
  );
}
