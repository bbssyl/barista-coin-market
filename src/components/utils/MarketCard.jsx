import React from "react";
import CardLineChart from "@/components/utils/CardLineChart";
import { spendingData } from "@/service/api";

const MarketCard = () => {
  return (
    <div>
      <div className="p-4 shadow-xl rounded-md bg-gradient-to-b from-indigo-950 to-black/50">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-1 items-center">
            <img
              src="/images/btc.png"
              alt="/images/btc.png"
              width={75}
              height={75}
              loading="lazy"
            />
            <div>
              <p className="font-bold">BTC</p>
              <p className="text-xs font-semibold">1.93%</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <div className="flex gap-1 justify-end">
              <span className="text-sm font-semibold">USD</span>
              <span className="text-sm font-semibold">EUR</span>
              <span className="text-sm font-semibold">TRY</span>
            </div>
            <div>
              <span className="text-lg font-semibold">1.306,93</span>
              <span className="text-sm">USD</span>
            </div>
            <div className="flex gap-1 items-end">
              <span className="text-gray-500 font-light">Volume</span>
              <span>18.243</span>
              <span className="text-sm font-light text-gray-500">BTC</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <CardLineChart data={spendingData} />
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
