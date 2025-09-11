import Section from "../feathers/shop/Section";

const brands = [
  {
    name: "السعودي للتكنولوجيا",
    bio: "وهي شركة وطنية تابعة لصندوق الاستثمارات العامة وتُعتبر الذراع التقني والأمني للمملكة، حيث تعمل على توفير حلول الأمن السيبراني والخدمات الرقمية للقطاعات الحكومية والخاصة. كما توجد الشركة السعودية للتنمية والاستثمار التقني (تقنية)، وهي أيضاً مملوكة لصندوق الاستثمارات العامة وتُعنى بالاستثمار في التقنيات الناشئة وتوطين المعرفة، بالإضافة إلى شركات خاصة أخرى تحمل أسماء مشابهة وتقدم حلولاً في قطاع تكنولوجيا المعلومات. هذه الكيانات تلعب دوراً محورياً في تحقيق أهداف رؤية المملكة 2030 من خلال دعم التحول الرقمي وتعزيز الابتكار التقني.",
    image: "/Services.webp",
    title: "منتجاتنا",
    products: [
      {
        id: 1,
        name: "حقيبة دافل من غوتشي",
        price: 960,

        img: "/shop/p1.png",
        rate: 5,
      },
      {
        id: 2,
        name: "سترة ساتان مبطنة من بالمان",
        price: 1960,
        oldPrice: 2160,
        img: "/shop/p2.png",
        rate: 4,
      },
      {
        id: 3,
        name: "لوحة ألعاب USB GP11 Shooter",
        price: 550,
        img: "/shop/p3.png",
        rate: 3,
      },
      {
        id: 4,
        name: "شاشة ألعاب IPS LCD",
        price: 1160,
        oldPrice: 2260,
        img: "/shop/p4.png",
        rate: 2,
      },
    ],
  },
  {
    name: "الكويتي للتكنولوجيا",
    bio: "وهي شركة وطنية تابعة لصندوق الاستثمارات العامة وتُعتبر الذراع التقني والأمني للمملكة، حيث تعمل على توفير حلول الأمن السيبراني والخدمات الرقمية للقطاعات الحكومية والخاصة. كما توجد الشركة السعودية للتنمية والاستثمار التقني (تقنية)، وهي أيضاً مملوكة لصندوق الاستثمارات العامة وتُعنى بالاستثمار في التقنيات الناشئة وتوطين المعرفة، بالإضافة إلى شركات خاصة أخرى تحمل أسماء مشابهة وتقدم حلولاً في قطاع تكنولوجيا المعلومات. هذه الكيانات تلعب دوراً محورياً في تحقيق أهداف رؤية المملكة 2030 من خلال دعم التحول الرقمي وتعزيز الابتكار التقني.",
    image: "/Services.webp",
    title: "منتجاتنا",
    products: [
      {
        id: 1,
        name: "حقيبة دافل من غوتشي",
        price: 960,

        img: "/shop/p1.png",
        rate: 5,
      },
      {
        id: 2,
        name: "سترة ساتان مبطنة من بالمان",
        price: 1960,
        oldPrice: 2160,
        img: "/shop/p2.png",
        rate: 4,
      },
      {
        id: 3,
        name: "لوحة ألعاب USB GP11 Shooter",
        price: 550,
        img: "/shop/p3.png",
        rate: 3,
      },
      {
        id: 4,
        name: "شاشة ألعاب IPS LCD",
        price: 1160,
        oldPrice: 2260,
        img: "/shop/p4.png",
        rate: 2,
      },
    ],
  },
];

export default function ShopPage() {
  return (
    <div className="w-[90%] mx-auto mt-20">
      {brands.map((brand) => (
        <>
          <div className="flex lg:flex-row flex-col gap-5 mt-20">
            <img
              src={brand.image}
              alt=""
              className="md:size-2/6 size-4/6 mx-auto"
            />
            <div className="flex flex-col gap-10 text-right mt-10">
              <h2 className="text-2xl font-semibold">{brand.name}</h2>
              <p className="leading-8">{brand.bio}</p>
            </div>
          </div>
          <div>
            <Section title={brand.title} products={brand.products} />
          </div>
        </>
      ))}
    </div>
  );
}
