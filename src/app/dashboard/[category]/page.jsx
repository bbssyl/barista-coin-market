"use client";
import OverviewComponent from "@/components/dashboard/OverviewComponent";
import MarketComponent from "@/components/dashboard/MarketComponents";
import ExchangeComponent from "@/components/dashboard/ExchangeComponent";
import WalletComponent from "@/components/dashboard/WalletComponent";

const SpesificContainer = ({ params }) => {
  return (
    <div>
      <h4 className="text-white font-semibold capitalize mb-3">
        {params.category}
      </h4>
      {params.category === "overview" && <OverviewComponent />}
      {params.category === "wallets" && <WalletComponent />}
      {params.category === "market" && <MarketComponent />}
      {params.category === "exchange" && <ExchangeComponent />}
    </div>
  );
};

export default SpesificContainer;
