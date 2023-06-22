"use client";
import { topListFetch } from "@/service/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { faCoins, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SecondChild = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const topListData = await Promise.resolve(topListFetch(7));
      setData(topListData);
    };
    fetchData();
  }, []);
  return (
    <section className="min-[280px]:h-full py-5 md:h-screen bg-gradient-to-tr from-indigo-950 to-indigo-900 flex items-center justify-center flex-grow flex-col text-indigo-50 snap-mandatory scroll-smooth overflow-y-auto snap-center">
      <div className="min-[280px]:w-full md:w-2/3 flex flex-col gap-4 p-2">
        <div>
          <h4 className="text-2xl font-semibold text-gray-300">
            Popüler Kripto Hisseleri
          </h4>
        </div>
        <div>
          {data.map((coin: any) => {
            return (
              <div
                className="rounded-lg shadow-md p-4 bg-indigo-900 bg-opacity-50 mb-1"
                key={coin.CoinInfo.Id}
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`}
                    alt={coin.CoinInfo.ImageUrl}
                    loading="lazy"
                    width={30}
                    height={30}
                  />
                  <span className="font-semibold">
                    {coin.CoinInfo.FullName}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      coin.RAW.USD.OPENDAY < coin.RAW.USD.PRICE
                        ? "text-green-500"
                        : coin.RAW.USD.OPENDAY === coin.RAW.USD.PRICE
                        ? "text-gray-500"
                        : "text-red-500"
                    }`}
                  >
                    (
                    {(
                      ((coin.RAW.USD.OPENDAY - coin.RAW.USD.PRICE) /
                        coin.RAW.USD.PRICE) *
                      100
                    ).toFixed(2)}{" "}
                    %)
                  </span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="flex gap-2 items-center text-sm text-gray-300">
                    <FontAwesomeIcon icon={faDollar} />
                    {coin.RAW.USD.PRICE}
                  </span>
                  <span className="flex gap-2 items-center text-sm text-gray-300">
                    <FontAwesomeIcon icon={faCoins} />
                    Volume: {coin.DISPLAY.USD.VOLUMEDAY}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="#">Tümünü görüntüle</Link>
        </div>
      </div>
    </section>
  );
};

export default SecondChild;
