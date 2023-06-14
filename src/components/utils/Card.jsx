import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";
const Card = ({ data }) => {
  return (
    <div
      className={`shadow-md shadow-gray-950/40 p-10 rounded-md bg-gradient-to-tr ${data.color}`}
    >
      <span className="font-bold">{data.name}</span>
      <div className="flex items-center gap-5">
        <div className="flex">
          <img src={data.icon} alt={data.icon} />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">
              {data.wallet} {data.shortscut}
            </span>
            <span>${data.wallet * data.price}</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            {data?.processes?.map((item) => {
              return (
                <div key={item.id} className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={
                      item.trend === "up" ? faArrowTrendUp : faArrowTrendDown
                    }
                    className={`w-10 h-10 ${
                      item.trend === "up"
                        ? "text-green-500 drop-shadow-green"
                        : "text-red-500 drop-shadow-red"
                    }`}
                  />
                  <div className="flex flex-col">
                    <span>
                      ${item.sellPrice} ={" "}
                      {item.sellCount.toString().replace(".", ",")}{" "}
                      {data.shortscut}
                    </span>
                    <span className="text-xs text-gray-400">
                      1 {data.shortscut} = $
                      {item.price.toString().replace(".", ",")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
