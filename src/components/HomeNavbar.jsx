import React from "react";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router";
import Sidebar from "./MobileSidebar";
import { FaXmark } from "react-icons/fa6";
import useAuthUser from "../hooks/useAuthUser";
import useLogout from "../hooks/useLogout";
import {
  ChartBarStacked,
  CircleUserRound,
  HeartPlus,
  ShoppingCart,
  SquareArrowLeft,
} from "lucide-react";
import { categories } from "../constants";

const navItems = [
  { name: "الرئيسيه", link: "/" },
  { name: "المتجر", link: "/shop" },
  { name: " بطاقات الخصم", link: "/ads" },
  { name: "الاخبار", link: "/news" },
  { name: "الخبرات", link: "/services" },
  { name: "الاصدقاء", link: "/friends" },
];

export default function Navbar({ type = "" }) {
  const { logoutMutation } = useLogout();
  const [navbar, setNavbar] = React.useState(false);
  const [minbar, setMinbar] = React.useState(false);
  const [isOpenCategiores, setOpenCategiores] = React.useState(false);

  const url = useLocation().pathname.split("/")[1];

  const { authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset || document.documentElement.scroll;
    if (scroll > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  return (
    <>
      {minbar && (
        <Sidebar
          type={type === "home" && !navbar}
          close={() => setMinbar((minbar) => !minbar)}
        />
      )}

      <div
        className={` lg:text-amber-50 body-font px-5 ${
          navbar || type !== "home"
            ? "bg-[#ffede8] fixed w-full top-0 left-0 z-100 shadow-lg shadow-[rgba(91, 187, 123, 0.15)]"
            : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="flex flex-row-reverse items-center lg:justify-center justify-between gap-5">
          {/* logo */}
          <img
            loading="lazy"
            className="md:size-18 size-12"
            src="/logo.webp"
            alt=""
          />

          {/* links */}
          <NavLink
            className={`lg:ml-auto  lg:mr-4 lg:py-1 lg:pr-4 lg:border-r lg:border-gray-400	 lg:flex-row-reverse flex-col items-center text-xl justify-between cursor-pointer gap-10 lg:flex hidden ${
              navbar || type !== "home" ? "text-[#222222]" : " text-[#ffede8]"
            }  transition-all duration-300`}
          >
            {navItems.map((link) =>
              link.link === "/friends" &&
              !isAuthenticated &&
              !isOnboarded ? null : (
                <Link
                  to={link.link}
                  className={`font-semibold cursor-pointer px-3 py-1  hover:text-green-100 hover:bg-green-500 transition-all duration-300 rounded-lg  hover:scale-110 active`}
                >
                  {link.name}
                </Link>
              )
            )}
          </NavLink>

          {/* buttons */}
          <div className=" flex justify-between">
            <div
              className={`flex flex-row-reverse justify-between items-center lg:gap-6 gap-4 ${
                url == "shop" ? "" : "hidden"
              }`}
            >
              <ChartBarStacked
                onMouseEnter={() => setOpenCategiores(true)}
                className="text-primaryBg lg:size-7 size-6 cursor-pointer"
              />
              <Link to="/shop/favourite">
                <HeartPlus className="text-primaryBg lg:size-7 size-6 cursor-pointer" />
              </Link>
              <Link to="/shop/cart">
                <ShoppingCart className="text-primaryBg lg:size-7 size-6 cursor-pointer" />
              </Link>

              {authUser ? (
                <Link to="/account">
                  <div
                    className={`flex gap-5 items-center text-primaryBg bg-secondarBg hover:bg-thirdBg hover:text-[#fff]ont-bold lg:pl-5 pl-3 pr-0.5 rounded-full  transition duration-300 cursor-pointer `}
                  >
                    <h1 className="font-bold">
                      {authUser.fullName.split(" ")[0]}
                    </h1>
                    <img
                      src={authUser.profilePicture}
                      alt=""
                      className=" rounded-full lg:size-10 size-8 "
                    />
                  </div>
                </Link>
              ) : (
                <Link to="/login">
                  <CircleUserRound className="text-primaryBg lg:size-7 size-6 cursor-pointer" />
                </Link>
              )}
            </div>

            <div
              className={`flex flex-row-reverse justify-between items-center gap-4 ${
                url == "shop" ? "hidden" : ""
              }`}
            >
              <Link to={`${isAuthenticated ? "/account" : "/signup"}`}>
                {isAuthenticated ? (
                  <div
                    className={`flex gap-5 justify-center items-center text-primaryBg bg-secondarBg hover:bg-thirdBg hover:text-[#fff]ont-bold lg:pl-5 pl-2  rounded-full  transition duration-300 cursor-pointer`}
                  >
                    <h1 className="font-bold text-right">
                      {authUser.fullName.split(" ")[0]}
                    </h1>
                    <img
                      src={authUser.profilePicture}
                      alt=""
                      className=" rounded-full lg:size-11 size-8"
                    />
                  </div>
                ) : (
                  <Button style="text-right" text="انضمام" />
                )}
              </Link>
              <Link to={`${isAuthenticated ? "/" : "./login"}`}>
                <Button
                  type="secounder"
                  reverse={navbar || type !== "home"}
                  onClick={isAuthenticated && logoutMutation}
                  style={`lg:text-sm text-[0.7rem] ${
                    isAuthenticated && "lg:block hidden"
                  }`}
                >
                  {isAuthenticated ? "تسجيل الخروج" : " تسجيل دخول"}
                </Button>

                {isAuthenticated ? (
                  <div className="flex lg:hidden justify-centet bg-thirdBg py-1 px-2 rounded-full gap-2">
                    <SquareArrowLeft
                      className="cursor-pointer"
                      onClick={isAuthenticated && logoutMutation}
                    />{" "}
                    <span className="font-semibold text-sm">خروج</span>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>

          {/* categories */}
          {isOpenCategiores && (
            <div
              onMouseLeave={() => setOpenCategiores(false)}
              className="bg-white flex flex-col text-black absolute top-[100%] left-[15%] text-right font-semibold rounded p-3"
            >
              {categories.map((cate) => (
                <Link
                  to={`/shop/categories/${cate.name}`}
                  className="mb-2 cursor-pointer hover:bg-thirdBg hover:rounded p-2"
                >
                  {cate.name}
                </Link>
              ))}
            </div>
          )}

          {/* minbar */}
          <div className="flex flex-row-reverse items-center gap-4">
            {minbar ? (
              <FaXmark
                className={`size-8 lg:hidden block ${
                  navbar || type !== "home"
                    ? "text-[#222222]"
                    : " text-[#ffede8]"
                }`}
                onClick={() => setMinbar((minbar) => !minbar)}
              />
            ) : (
              <FiMenu
                className={`size-8 lg:hidden block ${
                  navbar || type !== "home"
                    ? "text-[#222222]"
                    : " text-[#ffede8]"
                }`}
                onClick={() => setMinbar((minbar) => !minbar)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
