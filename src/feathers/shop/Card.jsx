import { ShoppingCart } from "lucide-react";
import Stars from "../../components/Stars";
import { Link } from "react-router";

export default function Card({ id, name, price, oldPrice, img, rate = 3 }) {
  return (
    <div className="w-full flex flex-col p-2 rounded-lg gap-3">
      <div
        className={`bg-white rounded-lg gap-5 flex flex-col items-center ${
          oldPrice &&
          `after:content-['30%'] after:absolute  after:bg-thirdBg after:text-white  after:text-sm  after:rounded-lg after:w-12 after:h-7 after:flex after:justify-center after:items-center after:top-[10px] after:left-3`
        }  relative`}
      >
        <img loading="lazy" src={img} alt="" className="h-50  p-5" />
        <Link
          to={`/shop/${id}`}
          className="flex justify-center gap-2 items-center cursor-pointer bg-primaryBg w-full p-2 text-white rounded-b-lg hover:bg-thirdBg transition duration-300"
        >
          {" "}
          <button className=" cursor-pointer">اشترى الان</button>{" "}
          <ShoppingCart />
        </Link>
      </div>
      <p className="text-right font-semibold text-sm">{name}</p>
      <div className="flex flex-row-reverse px-5 gap-5">
        <p>${price}</p>
        {oldPrice && <p className="text-primaryBg line-through">${oldPrice}</p>}
      </div>
      <Stars rate={rate} postion="start" />
    </div>
  );
}
