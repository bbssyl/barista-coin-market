import Dropdown from "@/components/utils/Dropdown";
import Card from "@/components/utils/Card";
import PieChartComponent from "@/components/utils/PieChartComponent";
import SpendingChartComponent from "@/components/utils/SpendingChartComponent";
import LineChartComponent from "@/components/utils/LineChartComponent";
import RecentNews from "@/components/utils/RecentNews";
import {
  pieChartData,
  months,
  coinInformation,
  spendingData,
} from "@/service/api";
const OverviewComponent = () => {
  return (
    <section className="flex flex-col gap-4 mb-10">
      <div className="flex gap-4 justify-evenly min-[280px]:flex-col">
        <div className="grid gap-2 min-[280px]:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div className="grid gap-4 min-[280px]:grid-cols-1 lg:grid-cols-1  xl:grid-cols-2">
            <div className="p-3 rounded-md shadow-md shadow-gray-950/40 min-[280px]:w-full  bg-indigo-950">
              <span>Balance</span>
              <PieChartComponent dataChart={pieChartData} />
            </div>
            <div className="p-3 rounded-md shadow-md shadow-gray-950/40 min-[280px]:w-full  bg-indigo-950">
              <div className="flex justify-between items-center">
                <span>Spending</span>
                <Dropdown title="Months" data={months} />
              </div>
              <div>
                <SpendingChartComponent />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="grid gap-4 min-[280px]:grid-cols-1 xl:grid-cols-2">
              {coinInformation.map((coin) => {
                return <Card key={coin.id} data={coin} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 min-[280px]:flex-col xl:flex-row">
        <div className="min-[280px]:w-full xl:w-4/6">
          <LineChartComponent
            data={spendingData}
            coins={coinInformation}
            months={months}
          />
        </div>
        <div className="min-[280px]:w-full xl:w-2/6 h-72">
          <RecentNews />
        </div>
      </div>
    </section>
  );
};

export default OverviewComponent;
