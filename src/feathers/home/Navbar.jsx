import React from "react";
import Button from "../../components/Button";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router";

export default function Navbar() {
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

  return (
    <div
      className={`w-full lg:text-amber-50 body-font  ${
        navbar
          ? "bg-[#ffede8] !text-[#222222] fixed top-0 left-0 z-100 shadow-lg shadow-[rgba(91, 187, 123, 0.15)]"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex  flex-wrap p-3 flex-col lg:flex-row-reverse lg:items-center">
        <div className="flex flex-row-reverse items-center lg:justify-center justify-between">
          <img className="size-18" src="/logo.png" alt="" />

          <div className="flex flex-row-reverse items-center gap-4">
            <Link to="/signup">
              {" "}
              <Button text="انضمام" style="lg:hidden block" />
            </Link>

            <FiMenu
              className={`size-10 lg:hidden block ${
                navbar ? "text-[#222222]" : " text-[#ffede8]"
              }`}
              onClick={() => setMinbar((minbar) => !minbar)}
            />
          </div>
        </div>

        <NavLink
          className={`lg:ml-auto lg:mr-4 lg:py-1 lg:pr-4 lg:border-r lg:border-gray-400	 lg:flex-row-reverse flex-col items-center text-xl justify-between cursor-pointer gap-10 lg:flex  ${
            minbar ? "flex " : "hidden"
          }  ${
            navbar ? "text-[#222222]" : " text-[#ffede8]"
          }  transition-all duration-300`}
        >
          <Link
            to="/"
            className={`mr-5 ${
              navbar ? "hover:text-[#5BBB7B]" : "hover:text-[#F9FCAA]"
            }`}
          >
            الرئيسيه
          </Link>
          <Link
            to="/shop"
            className={`mr-5 ${
              navbar ? "hover:text-[#5BBB7B]" : "hover:text-[#F9FCAA]"
            }`}
          >
            المتجر
          </Link>
          <Link
            to="/ads"
            className={`mr-5 ${
              navbar ? "hover:text-[#5BBB7B]" : "hover:text-[#F9FCAA]"
            }`}
          >
            بطاقات الخصم{" "}
          </Link>
          <Link
            to="/news"
            className={`mr-5 ${
              navbar ? "hover:text-[#5BBB7B]" : "hover:text-[#F9FCAA]"
            }`}
          >
            الاخبار
          </Link>
          <Link
            to="/services"
            className={`mr-5 ${
              navbar ? "hover:text-[#5BBB7B]" : "hover:text-[#F9FCAA]"
            }`}
          >
            الخبرات
          </Link>
        </NavLink>

        <div className="lg:flex flex-row-reverse justify-between items-center gap-4 hidden">
          <Link to="/signup">
            <Button text="انضمام" />
          </Link>
          <Link to="/login">
            <Button text="تسجيل دخول" type="secounder" reverse={navbar} />
          </Link>
        </div>
      </div>
    </div>
  );
}
