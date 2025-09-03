import { Link, NavLink } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
function Sidebar({ close, type }) {
  const navItems = [
    { name: "الرئيسيه", link: "/" },
    { name: "المتجر", link: "/shop" },
    { name: " بطاقات الخصم", link: "/ads" },
    { name: "الاخبار", link: "/news" },
    { name: "الخبرات", link: "/services" },
    { name: "الاصدقاء", link: "/friends" },
  ];

  const { authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;
  return (
    <aside
      className={`w-64 h-screen top-0 fixed flex lg:hidden flex-col justify-start items-center gap-1 px-1 ${
        type ? "py-1" : "py-11"
      } bg-[#ffede8] z-50 right-0 shadow-2xl shadow-[rgba(91, 187, 123, 0.15)]`}
    >
      {type && (
        <img loading="lazy" className="size-18 mt-4" src="/logo.webp" alt="" />
      )}
      <NavLink className="flex flex-col justify-end items-end gap-8 mt-15">
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
    </aside>
  );
}

export default Sidebar;
