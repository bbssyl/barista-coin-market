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
    <section className="min-[280px]:h-full py-5 md:h-screen bg-gradient-to-tr from-indigo-950 to-indigo-900 flex items-center justify-center flex-grow flex-col text-indigo-50 snap-mandatory scroll-smooth overflow-y-auto snap-center">
      <div className="min-[280px]:w-full md:w-2/3 flex flex-col gap-4 p-2">
        <div>
          <h4 className="text-2xl font-semibold text-gray-300">
            Popüler Kripto Hisseleri
          </h4>
        </div>
        <div className="grid min-[280px]:grid-cols-1 md:grid-cols-3 gap-2">
          {coinList.map((coin) => {
            return (
              <div
                key={coin.symbol}
                className="rounded-lg shadow-md p-4 bg-indigo-900 bg-opacity-50"
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
