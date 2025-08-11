import Slider from "react-slick";
import SampleNextArrow from "../../components/Arrows";
import Card from "../../components/Card";
import { Link } from "react-router";

const news = [
  {
    title: "",
    description: "تعاقدنا اليوم مع شركه الاعمال الدوليه لزياده الخبرات",
    image: "/news/news_1.png",
    num: "December 2, 2022",
  },
  {
    title: "",
    description: "تعاقدنا اليوم مع شركه الاعمال الدوليه لزياده الخبرات",
    image: "/news/news_2.png",
    num: "December 2, 2022",
  },
  {
    title: "",
    description: "تعاقدنا اليوم مع شركه الاعمال الدوليه لزياده الخبرات",
    image: "/news/news_3.png",
    num: "December 2, 2022",
  },
  {
    title: "",
    description: "تعاقدنا اليوم مع شركه الاعمال الدوليه لزياده الخبرات",
    image: "/news/news_4.png",
    num: "December 2, 2022",
  },
];

// Similarly, create a SamplePrevArrow component

export default function News() {
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
    <div className="flex flex-col items-center justify-between my-5 gap-5">
      <div className=" w-[80%] flex flex-row-reverse items-center justify-between p-8">
        <div className="flex flex-col items-end gap-8">
          <h2 className="text-2xl font-bold text-gray-800">الاخبار</h2>
          <p className="text-right">كل الفعليات الجديده و المتاحه من خلالنا</p>
        </div>

        <Link to="news">
          <p className=" text-gray-600 lg:block hidden">&#8592; باقي الاخبار</p>
        </Link>
      </div>

      <Slider className="w-[80%] mx-auto  " {...settings}>
        {news.map((offer) => (
          <div>
            <Card
              title={offer.title}
              description={offer.description}
              name={offer.name}
              userImage={offer.userImage}
              image={offer.image}
              num={offer.num}
              type="news"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
