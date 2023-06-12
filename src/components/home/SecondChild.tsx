import Link from "next/link";
import TopTableList from "./tradingview/TopTableList";
import TickerTapeWidget from "./tradingview/TickerTapeWidget";

const coinList = [
  {
    symbol: "BINANCE:BTCTRY",
  },
  {
    symbol: "BINANCE:ETHTRY",
  },
  {
    symbol: "BINANCE:XRPTRY",
  },
];

const SecondChild = () => {
  return (
    <section className="h-screen bg-indigo-950 flex items-center justify-center flex-grow flex-col text-indigo-50 snap-mandatory scroll-smooth overflow-y-auto snap-center">
      <div className="w-2/3 flex flex-col gap-4">
        <div>
          <h4 className="text-2xl font-semibold text-gray-300">
            Popüler Kripto Hisseleri
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {coinList.map((coin) => {
            return (
              <div
                key={coin.symbol}
                className="rounded-lg shadow-md p-2 bg-indigo-900 bg-opacity-50"
              >
                <TopTableList coin={coin.symbol} />
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <TickerTapeWidget />
        </div>
        <div className="text-center">
          <Link href="#">Tümünü görüntüle</Link>
        </div>
      </div>
    </section>
  );
};

export default SecondChild;
