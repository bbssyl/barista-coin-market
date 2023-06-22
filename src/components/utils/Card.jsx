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
      <span className="font-bold">{data.CoinInfo.FullName}</span>
      <div className="flex items-center justify-evenly gap-5">
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            src={`https://www.cryptocompare.com/${data.CoinInfo.ImageUrl}`}
            alt={data.CoinInfo.ImageUrl}
            width={100}
            height={100}
            loading="lazy"
          />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">
              60 {data.CoinInfo.Internal}
            </span>
            <span>${(60 * data.RAW.USD.PRICE).toFixed(2)}</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map((item) => {
              return (
                <div key={item} className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={
                      data.RAW.USD.OPENDAY < data.RAW.USD.PRICE
                        ? faArrowTrendUp
                        : faArrowTrendDown
                    }
                    className={`w-10 h-10 ${
                      data.RAW.USD.OPENDAY < data.RAW.USD.PRICE
                        ? "text-green-500 drop-shadow-green"
                        : "text-red-500 drop-shadow-red"
                    }`}
                  />
                  <div className="flex flex-col border-b border-gray-500">
                    <span className="text-sm">
                      $ {(data.RAW.USD.PRICE * 2).toFixed(2)}= 2x
                      {data.RAW.USD.PRICE}
                    </span>
                    <span className="text-xs text-gray-400">
                      1 {data.CoinInfo.Internal} = {data.DISPLAY.USD.HIGH24HOUR}
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
