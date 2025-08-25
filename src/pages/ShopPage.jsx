import Navbar from "../components/HomeNavbar";
import Section from "../feathers/shop/Section";

const prouductData = [
  {
    title: "الاكثر مبيعا",
    prouducts: [
      {
        id: 1,
        name: "حقيبة دافل من غوتشي",
        price: 960,

        img: "/public/shop/p1.png",
        rate: 5,
      },
      {
        id: 2,
        name: "سترة ساتان مبطنة من بالمان",
        price: 1960,
        oldPrice: 2160,
        img: "/public/shop/p2.png",
        rate: 4,
      },
      {
        id: 3,
        name: "لوحة ألعاب USB GP11 Shooter",
        price: 550,
        img: "/public/shop/p3.png",
        rate: 3,
      },
      {
        id: 4,
        name: "شاشة ألعاب IPS LCD",
        price: 1160,
        oldPrice: 2260,
        img: "/public/shop/p4.png",
        rate: 2,
      },
    ],
  },
  {
    title: "الكترونيات",
    prouducts: [
      {
        id: 1,
        name: "لوحة ألعاب HAVIT HV-G92",
        price: 960,
        oldPrice: 1160,
        img: "/public/shop/p5.png",
        rate: 4,
      },
      {
        id: 2,
        name: "لوحة مفاتيح سلكية AK-900",
        price: 200,
        img: "/public/shop/p6.png",
        rate: 2,
      },
      {
        id: 3,
        name: "مبرد وحدة المعالجة المركزية  ",
        price: 550,
        img: "/public/shop/p7.png",
        rate: 5,
      },
      {
        id: 4,
        name: "كمبيوتر محمول للألعاب ",
        price: 960,
        oldPrice: 1160,
        img: "/public/shop/p8.png",
        rate: 3,
      },
    ],
  },
  {
    title: "مقترحات لك",
    prouducts: [
      {
        id: 1,
        name: "لوحة ألعاب HAVIT HV-G92",
        price: 960,
        img: "/public/shop/p5.png",
        rate: 3,
      },
      {
        id: 2,
        name: "لوحة مفاتيح سلكية AK-900",
        price: 200,
        img: "/public/shop/p6.png",
        rate: 4,
      },
      {
        id: 3,
        name: "مبرد وحدة المعالجة المركزية  ",
        price: 550,
        oldPrice: 1160,
        img: "/public/shop/p7.png",
        rate: 5,
      },
      {
        id: 4,
        name: "كمبيوتر محمول للألعاب ",
        price: 960,
        oldPrice: 1160,
        img: "/public/shop/p8.png",
        rate: 4,
      },
    ],
  },
];

export default function ShopPage() {
  return (
    <div className="w-[90%] mx-auto">
      {prouductData.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          products={section.prouducts}
        />
      ))}
    </div>
  );
}
