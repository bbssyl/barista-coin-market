import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";
const Card = ({ data }) => {
  return (
    <section
      className={`shadow-md shadow-gray-950/40 p-4 rounded-md  bg-gradient-to-tr from-gray-950/50 ${data.color}`}
    >
      <span className="font-bold">{data.name}</span>
      <div className="flex items-center justify-evenly gap-5">
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            src={data.icon}
            alt={data.icon}
            width={100}
            height={100}
            loading="lazy"
          />
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
                  <div
                    variants={item}
                    className="flex flex-col border-b border-gray-500"
                  >
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
    </section>
  );
};

export default Card;
