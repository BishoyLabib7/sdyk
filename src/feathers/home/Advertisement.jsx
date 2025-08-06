import React from "react";
import client1 from "/Advertisement/ads_1.png";
import client2 from "/Advertisement/ads_2.jpg";
import client3 from "/Advertisement/ads_3.png";

import Slider from "react-slick";
import { Link } from "react-router";

export default function Advertisement() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-themepurple py-10">
      <Slider className="w-full" {...settings}>
        <Link to="/advertisement">
          <img
            src={client1}
            className="w-[100%] size-50 cursor-pointer transition-all duration-300 hover:scale-110"
          />
        </Link>
        <Link to="/advertisement">
          <img
            src={client2}
            className="w-[100%] size-50 cursor-pointer transition-all duration-300 hover:scale-110"
          />
        </Link>{" "}
        <Link to="/advertisement">
          <img
            src={client3}
            className="w-[100%] size-50 cursor-pointer transition-all duration-300 hover:scale-110"
          />{" "}
        </Link>
      </Slider>
    </div>
  );
}
