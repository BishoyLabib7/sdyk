import { Link, NavLink } from "react-router";
function Sidebar({ close }) {
  const navItems = [
    { name: "الرئيسيه", link: "/" },
    { name: "المتجر", link: "shop" },
    { name: " بطاقات الخصم", link: "ads" },
    { name: "الاخبار", link: "news" },
    { name: "الخبرات", link: "services" },
  ];
  return (
    <div className="w-52 flex flex-col justify-start items-center gap-1 px-1 py-1l bg-[#ffede8] fixed h-full z-[100] right-0 shadow-2xl shadow-[rgba(91, 187, 123, 0.15)]">
      <img className="size-18 mt-4" src="/logo.png" alt="" />
      <NavLink className="flex flex-col justify-end items-end gap-8 mt-10">
        {navItems.map(({ name, link }) => (
          <Link
            to={link}
            onClick={close}
            className="text-gray-800 text-lg uppercase font-semibold cursor-pointer px-4 py-2  hover:text-white hover:bg-[#3e4b40] transition-all duration-300 rounded-lg hover:scale-110"
          >
            {name}
          </Link>
        ))}
      </NavLink>
    </div>
  );
}

export default Sidebar;
