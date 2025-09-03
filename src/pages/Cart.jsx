import { prouducts } from "../constants";
import { Link } from "react-router";

export default function Cart() {
  let total = 0;
  for (let i = 0; i < prouducts.length; i++) {
    total += prouducts[i].price;
  }
  return (
    <div className="mt-20 w-[80%] mx-auto">
      <div className=" text-black p-6 rounded-lg shadow-lg flex gap-10 flex-col justify-center items-end">
        <div className="w-full flex justify-between">
          <Link to="/shop">
            <button className="text-center cursor-pointer border-1 border-b-neutral-800-200 lg:text-xl text-sm px-5 rounded-lg py-2">
              رجوع للمتجر
            </button>
          </Link>
          <h2 className="lg:text-3xl text-xl font-bold mb-4 text-right">
            المشتريات
          </h2>
        </div>

        <div className="w-full   hidden md:block">
          <table
            dir="rtl"
            className="w-full table-auto border-collapse text-lg"
          >
            <thead className="bg-white ">
              <tr>
                <th className="px-4 py-5 text-right text-xl font-semibold text-gray-700 uppercase tracking-wider rounded-tr-lg">
                  المنتجات
                </th>
                <th className="px-4 py-5 text-right text-xl font-semibold text-gray-700 uppercase tracking-wider">
                  السعر
                </th>
                <th className="px-4 py-5 text-right text-xl font-semibold text-gray-700 uppercase tracking-wider">
                  الكميه
                </th>
                <th className="px-4 py-5 text-right text-xl font-semibold text-gray-700 uppercase tracking-wider rounded-tl-lg">
                  المجموع
                </th>
              </tr>
            </thead>
            <tbody>
              {prouducts.map((product, index) => (
                <tr key={index}>
                  <td className="bg-white border-y-10 border-sadykBg px-4 py-5">
                    <span className="flex items-center gap-5">
                      <img src={product.img} alt="" className="size-15" />

                      {product.name}
                    </span>
                  </td>
                  <td className="bg-white border-y-10 border-sadykBg px-4 py-5">
                    ${product.price}
                  </td>
                  <td className="bg-white border-y-10 border-sadykBg px-4 py-5">
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-10 border rounded-lg text-center"
                    />
                  </td>
                  <td className="bg-white border-y-10 border-sadykBg px-4 py-5 text-red-500 font-semibold">
                    ${product.quantity * product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards (shown on mobile) */}
        <div dir="rtl" className="w-full md:hidden space-y-4">
          {prouducts.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="text-right font-medium text-gray-900 text-lg mb-2">
                {product.name}
              </h3>
              <div className="flex justify-between items-center text-right">
                <div>
                  <p className="text-xs text-gray-500">الكمية</p>
                  <p className="font-medium mt-2">
                    {" "}
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-10 border rounded-lg text-center"
                    />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">السعر</p>
                  <p className="font-medium">${product.price}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">المجموع</p>
                  <p className="font-medium">${total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-[30%] w-full border-3 border-primaryBg text-right rounded-lg p-5">
          <h2 className="font-semibold text-xl">إجمالي سلة التسوق</h2>
          <div className="flex justify-between mt-5 border-b-2 border-green-400 pb-2">
            <p className="text-red-800 font-bold">${total}</p>
            <p className="font-semibold">الكلى</p>
          </div>
          <div className="flex justify-between mt-5 border-b-2 border-green-400 pb-2">
            <p className="text-red-800 font-bold">FREE</p>
            <p className="font-semibold">الشحن</p>
          </div>
          <div className="flex justify-between mt-5 border-b-2 border-green-400 pb-2">
            <p className="text-red-800 font-bold">${total}</p>
            <p className="font-semibold">المجموع</p>
          </div>{" "}
          <Link to={`/shop/checkout`}>
            <div className="w-full  text-center cursor-pointer bg-primaryBg text-white font-extrabold text-xl py-3 px-10 rounded-lg mt-5">
              اكمل الدفع
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
