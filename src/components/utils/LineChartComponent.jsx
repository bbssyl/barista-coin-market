import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartComponent = ({
  width = "100%",
  height = 200,
  data = [],
  months = [],
  coins = [],
}) => {
  return (
    <div className="rounded-md shadow-lg bg-indigo-950 p-4 h-full">
      <div className="flex gap-2 justify-between p-2">
        <div className="flex gap-2">
          <span className="text-white font-semibold">Market</span>
          {coins.length > 0 ? (
            <select name="" id="" className="bg-transparent outline-none">
              {coins.map((coin) => {
                return (
                  <option
                    key={coin.id}
                    value={coin.shortscut}
                    className="text-indigo-600 "
                  >
                    {coin.name}
                  </option>
                );
              })}
            </select>
          ) : null}
        </div>
        <div>
          {months.length > 0 ? (
            <select name="" id="" className="bg-transparent outline-none">
              {months.map((m) => {
                return (
                  <option key={m} value={m} className="text-indigo-600">
                    {m}
                  </option>
                );
              })}
            </select>
          ) : null}
        </div>
      </div>
      <ResponsiveContainer width={width} height={height}>
        <LineChart data={data} width={width} height={height}>
          <Line type="monotone" dataKey="pv" stroke="#1288e8" strokeWidth={2} />
          <CartesianGrid
            vertical={false}
            stroke="#1288e8"
            strokeOpacity={0.2}
          />
          <XAxis
            dataKey="name"
            stroke="#1288e8"
            strokeOpacity={0.3}
            className="font-light"
            opacity={0.5}
          />
          <YAxis
            stroke="#1288e8"
            strokeOpacity={0.2}
            tickLine={false}
            opacity={0.5}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
