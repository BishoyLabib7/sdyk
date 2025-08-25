import React from "react";
import Card from "./Card";
import Button from "../../components/Button";

export default function Section({ title, products }) {
  return (
    <div className="w-full flex lg:flex-row-reverse flex-col justify-between mx-auto mt-10">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="w-full mt-10  flex flex-row-reverse justify-between items-center">
          <div className="flex flex-row-reverse items-center gap-2">
            {" "}
            <div className="bg-primaryBg w-4 h-7 rounded-sm"></div>
            <h1 className="text-right text-xl font-bold my-5 text-primaryBg">
              {title}
            </h1>
          </div>
          <Button type="sec" style="text-primaryBg border-primaryBg rounded-lg">
            المزيد
          </Button>
        </div>

        <div className="w-full flex lg:flex-row justify-center flex-col gap-5">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              img={product.img}
              rate={product.rate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
