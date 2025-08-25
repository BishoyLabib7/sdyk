import { FaStar } from "react-icons/fa";
function Stars({ rate, postion = "start" }) {
  const element = [];
  for (let index = 0; index < 5; index++) {
    if (index < rate) element.push("text-yellow-500");
    else element.push("text-gray-300");
  }
  return (
    <div className={`flex justify-${postion} items-center gap-1`}>
      {element.map((el) => (
        <FaStar className={`${el}`} />
      ))}
    </div>
  );
}

export default Stars;
