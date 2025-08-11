import PersonalCard from "../../components/PersonalCard";
import SampleNextArrow from "../../components/Arrows";
import Slider from "react-slick";

const people = [
  { name: "أحمد سامي", job: "مهندس مدني" },
  { name: "منى شريف", job: "معلمة لغة عربية" },
  { name: "كريم فؤاد", job: "مصمم جرافيك" },
  { name: "ياسمين حسام", job: "ممرضة" },
  { name: "محمد طارق", job: "محاسب" },
  { name: "سارة مجدي", job: "مطورة مواقع" },
  { name: "عمرو خالد", job: "صحفي" },
  { name: "ندى أحمد", job: "أخصائية تسويق" },
  { name: "هاني عصام", job: "سائق خاص" },
  { name: "رحاب محمد", job: "موظفة استقبال" },
  { name: "سامح أيمن", job: "فني كهرباء" },
  { name: "فاطمة هاني", job: "أخصائية موارد بشرية" },
  { name: "إيهاب محمود", job: "مبرمج" },
  { name: "دعاء أسامة", job: "مديرة مشروع" },
  { name: "مصطفى حسن", job: "طبيب أسنان" },
  { name: "ريم أحمد", job: "مهندسة ديكور" },
  { name: "حسام عبد الله", job: "مدرس رياضيات" },
  { name: "مي خالد", job: "مترجمة" },
  { name: "تامر إبراهيم", job: "فني ميكانيكا" },
  { name: "شيماء علي", job: "صيدلانية" },
];

export default function ActiveExperts() {
  const settings = {
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-10 my-20">
        <div className=" w-[80%] text-right ">
          <h2 className="text-2xl py-5 font-bold text-gray-800">
            : خبرائنا متاحين الآن
          </h2>
        </div>
        <Slider className="w-[80%] mx-auto  " {...settings}>
          {people.map((person) => (
            <div>
              <PersonalCard name={person.name} jop={person.job} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
