"use client";
import OverviewComponent from "@/components/dashboard/OverviewComponent";
import MarketComponent from "@/components/dashboard/MarketComponents";
import ExchangeComponent from "@/components/dashboard/ExchangeComponent";
import WalletComponent from "@/components/dashboard/WalletComponent";
import { renderMenu } from "@/service/api";
import { notFound } from "next/navigation";

const SpesificContainer = ({ params }) => {
  const isValidCategory = (category) => {
    let validCategory = [];
    renderMenu.map((menu) => validCategory.push(menu.url));
    return validCategory.includes(category);
  };

  if (!isValidCategory(`/${params.category}`)) {
    return notFound();
  }
  return (
    <>
      <title>{params.category.toUpperCase()}</title>
      <div>
        <h4 className="text-white font-semibold capitalize mb-3">
          {params.category}
        </h4>
        {params.category === "overview" && <OverviewComponent />}
        {params.category === "wallets" && <WalletComponent />}
        {params.category === "market" && <MarketComponent />}
        {params.category === "exchange" && <ExchangeComponent />}
      </div>
    </>
  );
};

export default SpesificContainer;
