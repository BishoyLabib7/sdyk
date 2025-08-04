import Slider from "react-slick";
import OfferCard from "./OfferCard";
import SampleNextArrow from "./Arrows";

const offers = [
  {
    title: "تصميم المواقع",
    description: "اقدم خبرات في تصميم المواقع",
    image: "/Offers/offer_1.png",
    userImage: "/Offers/user_1.png",
    name: "نوره محمدي",
    rating: 4.82,
  },
  {
    title: "تصميم علامات",
    description: "اقدم خبرات في تصميم العلامات التجاريه",
    image: "/Offers/offer_2.png",
    userImage: "/Offers/user_2.png",
    name: "علي توفيق",
    rating: 4.82,
  },
  {
    title: "تصميم علامات",
    description: "اقدم خبرات في تصميم الاعلانات",
    image: "/Offers/offer_3.png",
    userImage: "/Offers/user_3.png",
    name: "حسناء يوسف",
    rating: 4.82,
  },
  {
    title: "تصميم علامات",
    description: "اقدم خبرات في تصميم التطبيقات",
    image: "/Offers/offer_4.png",
    userImage: "/Offers/user_4.png",
    name: "مصطفي رضي",
    rating: 4.82,
  },
];

// Similarly, create a SamplePrevArrow component

export default function SimpleSlider() {
  const settings = {
    dots: true,
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
    <div className="flex flex-col items-center justify-between my-10 gap-10">
      <div className=" w-[80%] text-right p-8">
        <h2 className="text-2xl font-bold text-gray-800">
          اشهر الخبرات التي تم تقدمها
        </h2>
      </div>
      <Slider className="w-[80%] mx-auto  " {...settings}>
        {offers.map((offer) => (
          <div>
            <OfferCard
              title={offer.title}
              description={offer.description}
              name={offer.name}
              userImage={offer.userImage}
              image={offer.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
