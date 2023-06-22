import React, { useEffect, useState } from "react";
import CardLineChart from "@/components/utils/CardLineChart";
import { chartDataFetch, spendingData } from "@/service/api";

const MarketCard = ({
  img,
  internal,
  pecent,
  price,
  currencies = [],
  volume,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const chartData = await Promise.resolve(chartDataFetch(internal));
      setData(chartData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-4 shadow-xl rounded-md bg-gradient-to-b from-indigo-950 to-black/50">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-1 items-center">
            <img
              src={`https://www.cryptocompare.com/${img}`}
              alt={`${img}`}
              width={75}
              height={75}
              loading="lazy"
            />
            <div>
              <p className="font-bold">{internal}</p>
              <p
                className={`text-xs font-semibold ${
                  pecent < 0
                    ? "text-red-600"
                    : pecent > 0
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {pecent}%
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <div className="flex gap-1 justify-end">
              {currencies.map((c) => {
                return (
                  <span className="text-sm font-semibold" key={c}>
                    {c}
                  </span>
                );
              })}
            </div>
            <div>
              <span className="text-lg font-semibold">{price}</span>
              <span className="text-sm">USD</span>
            </div>
            <div className="flex gap-1 items-end">
              <span className="text-gray-500 font-light">Volume</span>
              <span>{volume}</span>
              <span className="text-sm font-light text-gray-500">
                {internal}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <CardLineChart data={data.Data} />
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
