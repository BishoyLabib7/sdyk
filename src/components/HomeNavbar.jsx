import React from "react";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import Sidebar from "./MobileSidebar";
import { FaXmark } from "react-icons/fa6";
import useAuthUser from "../hooks/useAuthUser";
import useLogout from "../hooks/useLogout";

const navItems = [
  { name: "الرئيسيه", link: "/" },
  { name: "المتجر", link: "/shop" },
  { name: " بطاقات الخصم", link: "/ads" },
  { name: "الاخبار", link: "/news" },
  { name: "الخبرات", link: "/services" },
];

export default function Navbar({ type = "" }) {
  const { logoutMutation } = useLogout();
  const [navbar, setNavbar] = React.useState(false);
  const [minbar, setMinbar] = React.useState(false);
  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset || document.documentElement.scroll;
    if (scroll > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });
  const { authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);

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
            ? "bg-[#ffede8] !text-[#c9c8c8] fixed w-full top-0 left-0 z-100 shadow-lg shadow-[rgba(91, 187, 123, 0.15)]"
            : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="container mx-auto flex  flex-wrap p-1 flex-col lg:flex-row-reverse lg:items-center">
          <div className="flex flex-row-reverse items-center lg:justify-center justify-between">
            <img className="md:size-18 size-12" src="/logo.png" alt="" />

            <div className="flex flex-row-reverse items-center gap-4">
              <Link to={`${isAuthenticated ? "/services" : "/signup"}`}>
                <Button
                  text={`${
                    isAuthenticated ? `${authUser.fullName}..مرحبا` : "انضمام"
                  }`}
                  style="lg:hidden block"
                />
              </Link>
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

          <NavLink
            className={`lg:ml-auto  lg:mr-4 lg:py-1 lg:pr-4 lg:border-r lg:border-gray-400	 lg:flex-row-reverse flex-col items-center text-xl justify-between cursor-pointer gap-10 lg:flex hidden ${
              navbar || type !== "home" ? "text-[#222222]" : " text-[#ffede8]"
            }  transition-all duration-300`}
          >
            {navItems.map((link) => (
              <Link
                to={link.link}
                className={`font-semibold cursor-pointer px-3 py-1  hover:text-green-100 hover:bg-green-500 transition-all duration-300 rounded-lg  hover:scale-110 active`}
              >
                {link.name}
              </Link>
            ))}
          </NavLink>

          <div className="lg:flex flex-row-reverse justify-between items-center gap-4 hidden">
            <Link to={`${isAuthenticated ? "/services" : "/signup"}`}>
              <Button
                text={`${
                  isAuthenticated ? `${authUser.fullName}..مرحبا` : "انضمام"
                }`}
              />
            </Link>
            <Link to={`${isAuthenticated ? "/" : "./login"}`}>
              <Button
                type="secounder"
                reverse={navbar || type !== "home"}
                onClick={isAuthenticated && logoutMutation}
              >
                {isAuthenticated ? (
                  <span>&#8592; تسجيل الخروج </span>
                ) : (
                  "تسجيل دخول"
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
