import { Link, NavLink } from "react-router";
function Sidebar({ close, type }) {
  const navItems = [
    { name: "الرئيسيه", link: "/" },
    { name: "المتجر", link: "/shop" },
    { name: " بطاقات الخصم", link: "/ads" },
    { name: "الاخبار", link: "/news" },
    { name: "الخبرات", link: "/services" },
  ];
  return (
    <div
      className={`w-52 flex flex-col justify-start items-center gap-1 px-1 ${
        type ? "py-1" : "py-11"
      } bg-[#ffede8] fixed h-full z-50 right-0 shadow-2xl shadow-[rgba(91, 187, 123, 0.15)]`}
    >
      {type && <img className="size-18 mt-4" src="/logo.png" alt="" />}
      <NavLink className="flex flex-col justify-end items-end gap-8 mt-15">
        {navItems.map(({ name, link }) => (
          <Link
            to={link}
            onClick={close}
            className={`font-semibold cursor-pointer px-3 py-1  hover:bg-green-300 transition-all duration-300 rounded-lg  hover:scale-110 active`}
          >
            {name}
          </Link>
        ))}
      </NavLink>
    </div>
  );
}

export default Sidebar;
