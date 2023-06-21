import PiechartComponent from "../utils/PieChartComponent";
import { pieChartData, spendingData } from "../../service/api";
import CardLineChart from "../utils/CardLineChart";
import LineCartComponent from "../utils/LineChartComponent";
import RecentNews from "../utils/RecentNews";
const WalletComponent = () => {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="scroll-container grid min-[280px]:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-2 ">
        <div className="p2 shadow-lg bg-gradient-to-bl from-indigo-950 to-black/50 rounded-md">
          <div>
            <PiechartComponent dataChart={pieChartData} horizontal={true} />
          </div>
        </div>
        {pieChartData.map((coin) => {
          return (
            <div
              key={coin.name}
              className="p-2 shadow-lg bg-gradient-to-bl from-indigo-950 to-black/50 rounded-md"
            >
              <span className="font-semibold m-2">{coin.name}</span>
              <div className="flex justify-between flex-col items-end">
                <div className="flex gap-2 items-center">
                  <div className="text-right">
                    <div className="flex gap-1">
                      <span className="text-lg font-semibold">
                        {coin.value}
                      </span>
                      <span className="text-lg">USD</span>
                    </div>
                    <span className="font-light text-gray-500 text-sm">
                      +2.59%
                    </span>
                  </div>
                  <div>
                    <img
                      src={coin?.icon}
                      alt={coin?.icon}
                      width={100}
                      height={100}
                      className="drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div>
                <CardLineChart data={spendingData} height={50} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid min-[280px]:grid-cols-1 min-[280px]:grid-rows-2 md:grid-cols-3 md:grid-rows-none gap-2">
        <div className="min-[280px]:col-span-1 md:col-span-2 ">
          <LineCartComponent data={spendingData} height={400} />
        </div>
        <div>
          <RecentNews />
        </div>
      </div>
    </div>
  );
};

export default WalletComponent;
