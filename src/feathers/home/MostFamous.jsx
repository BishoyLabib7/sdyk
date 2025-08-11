import SampleNextArrow from "../../components/Arrows";
import Slider from "react-slick";
import Card from "../../components/Card";

const famous = [
  {
    title: "الدكتور احمد عبدالمنعم ",
    description: "اقدم خبرات في تصميم المواقع",
    image: "/MostFamous/famous_1.png",
    rating: 4.9,
  },

  {
    title: "المهندس زياد علي ",
    description: "اقدم خبرات في تصميم المواقع",
    image: "/MostFamous/famous_3.png",
    rating: 4.9,
  },

  {
    title: "الاستاذه علياء محمد",
    description: "اقدم خبرات في تصميم المواقع",
    image: "/MostFamous/famous_2.png",
    rating: 4.9,
  },
];

export default function MostFamous() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    slidesToShow: 3,
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
    <div className="flex flex-col items-center justify-between gap-10 my-20">
      <div className=" w-[80%] text-right ">
        <h2 className="text-2xl font-bold text-gray-800">
          اشهر مقدمين الخبرات
        </h2>
      </div>
      <Slider className="w-[80%] mx-auto  " {...settings}>
        {famous.map((offer) => (
          <div>
            <Card
              title={offer.title}
              description={offer.description}
              name={offer.name}
              userImage={offer.userImage}
              image={offer.image}
              type="services"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
