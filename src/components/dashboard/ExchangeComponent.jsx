import React from "react";
import Dropdown from "@/components/utils/Dropdown";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { usePathname } from "next/navigation";

const ExchangeComponent = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-10 mb-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 mb-3">From</p>
          <div className="rounded-md shadow-xl p-10 bg-gradient-to-b from-indigo-950 to-black/10 h-full flex flex-col justify-around">
            <div className="flex justify-between items-center">
              <Dropdown title="From coin" />
              <img
                src="/images/btc.png"
                alt="btc.png"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="mt-3">
              <Input fullfilled />
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-500 mb-3">To</p>
          <div className="rounded-md shadow-xl p-10 bg-gradient-to-b from-indigo-950 to-black/10 h-full flex flex-col justify-around">
            <div className="flex justify-between items-center">
              <Dropdown title="To coin" />
              <img
                src="/images/grc.png"
                alt="btc.png"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <div className="mt-3">
              <Input fullfilled />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md shadow-lg p-4">
        <div className="flex min-[280px]:flex-col md:flex-row gap-2 justify-center items-center text-2xl font-bold">
          <div className="flex gap-2 items-center">
            <span>0.45213</span>
            <span>BTC</span>
            <img
              src="/images/btc.png"
              alt="btc.png"
              width={75}
              height={75}
              loading="lazy"
            />
          </div>
          <div className="border border-indigo-500 w-52 "></div>
          <div className="flex gap-2 items-center">
            <span>1.45215</span>
            <span>GRC</span>
            <img
              src="/images/grc.png"
              alt="grc.png"
              width={75}
              height={75}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto pb-10">
        <Button href={pathname} label="Exchange" color={"primary"} />
      </div>
    </div>
  );
};

export default ExchangeComponent;
