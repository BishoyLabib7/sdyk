import React, { useState } from "react";
import Navbar from "../components/HomeNavbar";
import ActiveExperts from "../feathers/experiences/ActiveExperts";
import Filtration from "../feathers/experiences/Filtration";
import Categories from "../feathers/experiences/Categories";
import ExpertCard from "../components/ExpertCard";

const experts = [
  {
    id: 1,
    img: "/person.webp",
    name: "أحمد سامي",
    job: "مهندس مدني",
    stars: 5,
    experiences: 6,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 2,
    img: "/person.webp",
    name: "منى شريف",
    job: "معلمة لغة عربية",
    stars: 5,
    experiences: 8,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 3,
    img: "/person.webp",
    name: "كريم فؤاد",
    job: "مصمم جرافيك",
    stars: 5,
    experiences: 7,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 4,
    img: "/person.webp",
    name: "ياسمين حسام",
    job: "ممرضة",
    stars: 5,
    experiences: 1,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 5,
    img: "/person.webp",
    name: "محمد طارق",
    job: "محاسب",
    stars: 5,
    experiences: 9,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 6,
    img: "/person.webp",
    name: "سارة مجدي",
    job: "مطورة مواقع",
    stars: 5,
    experiences: 7,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 7,
    img: "/person.webp",
    name: "عمرو خالد",
    job: "صحفي",
    stars: 5,
    experiences: 2,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 8,
    img: "/person.webp",
    name: "ندى أحمد",
    job: "أخصائية تسويق",
    stars: 5,
    experiences: 9,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 9,
    img: "/person.webp",
    name: "هاني عصام",
    job: "سائق خاص",
    stars: 5,
    experiences: 20,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 10,
    img: "/person.webp",
    name: "رحاب محمد",
    job: "موظفة استقبال",
    stars: 5,
    experiences: 3,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 11,
    img: "/person.webp",
    name: "سامح أيمن",
    job: "فني كهرباء",
    stars: 5,
    experiences: 4,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 12,
    img: "/person.webp",
    name: "فاطمة هاني",
    job: "أخصائية موارد بشرية",
    stars: 5,
    experiences: 7,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 13,
    img: "/person.webp",
    name: "إيهاب محمود",
    job: "مبرمج",
    stars: 5,
    experiences: 6,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 14,
    img: "/person.webp",
    name: "دعاء أسامة",
    job: "مديرة مشروع",
    stars: 5,
    experiences: 5,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 15,
    img: "/person.webp",
    name: "مصطفى حسن",
    job: "طبيب أسنان",
    stars: 5,
    experiences: 5,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 16,
    img: "/person.webp",
    name: "ريم أحمد",
    job: "مهندسة ديكور",
    stars: 5,
    experiences: 5,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 17,
    img: "/person.webp",
    name: "حسام عبد الله",
    job: "مدرس رياضيات",
    stars: 5,
    experiences: 5,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 18,
    img: "/person.webp",
    name: "مي خالد",
    job: "مترجمة",
    stars: 5,
    experiences: 5,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 19,
    img: "/person.webp",
    name: "تامر إبراهيم",
    job: "فني ميكانيكا",
    stars: 5,
    experiences: 5,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
  {
    id: 20,
    img: "/person.webp",
    name: "شيماء علي",
    job: "صيدلانية",
    stars: 5,
    experiences: 5,
    price: { half: 250, full: 450 },
    appointment: { time: "5 مساءا", day: "15 اغسطس" },
  },
];
export default function Experiences() {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <ActiveExperts />
      <div className="lg:w-[90%] w-full flex lg:flex-row-reverse flex-col justify-center gap-10 lg:mx-10">
        <div className="lg:w-[30%] lg:h-screen lg:bg-white rounded-xl lg:p-3 lg:row-span-2">
          <Filtration open={openFilter} setOpen={setOpenFilter} />
        </div>

        <div className="w-full flex flex-col">
          <Categories handleOpen={setOpenFilter} />

          <div className="mt-5 px-5">
            {experts.map((expert) => (
              <ExpertCard
                key={expert.id}
                id={expert.id}
                img={expert.img}
                name={expert.name}
                jop={expert.jop}
                stars={expert.stars}
                experiences={expert.experiences}
                price={experts.price}
                appointment={expert.appointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
