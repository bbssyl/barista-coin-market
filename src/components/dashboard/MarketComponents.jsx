import React, { useEffect, useState } from "react";
import MarketCard from "@/components/utils/MarketCard";
import { topListFetch } from "@/service/api";

const MarketComponents = () => {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const fetchData = async () => {
      const topListData = await Promise.resolve(topListFetch(20, currency));
      setData(topListData);
    };
    fetchData();
  }, [currency]);

  return (
    <div className="grid min-[280px]:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
      {data.map((item) => {
        return (
          <MarketCard
            key={item.CoinInfo.Id}
            img={item.CoinInfo.ImageUrl}
            internal={item.CoinInfo.Name}
            volume={item.RAW.USD.VOLUMEDAY.toFixed(2)}
            price={item.DISPLAY.USD.PRICE}
            pecent={(
              ((item.RAW.USD.OPENDAY - item.RAW.USD.PRICE) /
                item.RAW.USD.PRICE) *
              100
            ).toFixed(2)}
          />
        );
      })}
    </div>
  );
};

export default MarketComponents;
