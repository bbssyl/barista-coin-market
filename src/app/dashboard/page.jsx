import Dropdown from "@/components/utils/Dropdown";
import Card from "@/components/utils/Card";
const DashboardPage = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const coinInformation = [
    {
      id: 1,
      name: "Bitcoin",
      shortscut: "BTC",
      icon: "",
      color: "from-gray-950/50 to-indigo-700",
      wallet: 600,
      price: 5000,
      processes: [
        {
          id: 1,
          price: 6642.22,
          sellPrice: 1200,
          sellCount: 0.075,
          trend: "down",
        },
        {
          id: 2,
          price: 6264.35,
          sellPrice: 1200,
          sellCount: 0.034,
          trend: "down",
        },
        {
          id: 3,
          price: 6542.35,
          sellPrice: 1200,
          sellCount: 0.074,
          trend: "up",
        },
      ],
    },
    {
      id: 2,
      name: "Ethereum",
      shortscut: "ETH",
      icon: "",
      color: "from-gray-950/50 to-orange-700",
      wallet: 600,
      price: 5000,
      processes: [
        {
          id: 1,
          price: 6642.22,
          sellPrice: 1200,
          sellCount: 0.075,
          trend: "down",
        },
        {
          id: 2,
          price: 6264.35,
          sellPrice: 1200,
          sellCount: 0.034,
          trend: "down",
        },
        {
          id: 3,
          price: 6542.35,
          sellPrice: 1200,
          sellCount: 0.074,
          trend: "up",
        },
      ],
    },
  ];
  return (
    <section className="flex gap-2 justify-evenly">
      <div className="p-10 rounded-md shadow-md shadow-gray-950/40 w-1/4 bg-indigo-950">
        <span>Balance</span>
      </div>
      <div className="p-10 rounded-md shadow-md shadow-gray-950/40 w-1/4 bg-indigo-950">
        <div className="flex justify-between items-center">
          <span>Spending</span>
          <Dropdown title="Months" data={months} />
        </div>
      </div>
      <div className="flex gap-4">
        {coinInformation.map((coin) => {
          return <Card key={coin.id} data={coin} />;
        })}
      </div>
    </section>
  );
};

export default DashboardPage;
