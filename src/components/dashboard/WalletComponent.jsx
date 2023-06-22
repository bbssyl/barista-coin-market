import PiechartComponent from "../utils/PieChartComponent";
import {
  chartDataFetch,
  newsDataFetch,
  pieChartData,
  spendingData,
  topListFetch,
} from "../../service/api";
import CardLineChart from "../utils/CardLineChart";
import LineCartComponent from "../utils/LineChartComponent";
import RecentNews from "../utils/RecentNews";
import { useEffect, useState } from "react";
const WalletComponent = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const [topListDatas, chartDatas, newsData] = await Promise.all([
        topListFetch(),
        chartDataFetch("BTC"),
        newsDataFetch(),
      ]);
      setData(topListDatas);
      setChartData(chartDatas);
      setNews(newsData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="scroll-container grid min-[280px]:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-2 ">
        <div className="p2 shadow-lg bg-gradient-to-bl from-indigo-950 to-black/50 rounded-md">
          <div>
            <PiechartComponent horizontal={true} />
          </div>
        </div>
        {data.slice(0, 3).map((coin) => {
          return (
            <div
              key={coin.CoinInfo.Id}
              className="p-2 shadow-lg bg-gradient-to-bl from-indigo-950 to-black/50 rounded-md"
            >
              <span className="font-semibold m-2">
                {coin.CoinInfo.FullName}
              </span>
              <div className="flex justify-between flex-col items-end">
                <div className="flex gap-2 items-center">
                  <div className="text-right">
                    <div className="flex gap-1">
                      <span className="text-lg font-semibold">
                        {coin.DISPLAY.USD.PRICE}
                      </span>
                      <span className="text-lg">USD</span>
                    </div>
                    <span className="font-light text-gray-500 text-sm">
                      +2.59%
                    </span>
                  </div>
                  <div>
                    <img
                      src={`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                      alt={coin.CoinInfo.ImageUrl}
                      width={100}
                      height={100}
                      className="drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div>
                <CardLineChart data={chartData.Data} height={50} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid min-[280px]:grid-cols-1 min-[280px]:grid-rows-2 md:grid-cols-3 md:grid-rows-none gap-2">
        <div className="min-[280px]:col-span-1 md:col-span-2 ">
          <LineCartComponent chartData={chartData} height={400} />
        </div>
        <div>
          <RecentNews data={news} />
        </div>
      </div>
    </div>
  );
};

export default WalletComponent;
