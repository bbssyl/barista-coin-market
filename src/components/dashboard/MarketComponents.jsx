import React from "react";
import MarketCard from "@/components/utils/MarketCard";

const MarketComponents = () => {
  return (
    <div className="grid min-[280px]:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
      <MarketCard />
      <MarketCard />
      <MarketCard />
      <MarketCard />
    </div>
  );
};

export default MarketComponents;
