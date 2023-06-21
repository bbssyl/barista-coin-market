import React from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis } from "recharts";
import { spendingData } from "@/service/api";

const SpendingChartComponent = ({ width = "100%", height = 300 }) => {
  return (
    <>
      <div className="text-white flex flex-col gap-2">
        <div className="flex gap-2 font-bold text-2xl">
          <span>$</span>
          <span>5743,35</span>
        </div>
        <span className="text-xs text-gray-500">total spending</span>
      </div>
      <ResponsiveContainer width={width} height={height}>
        <AreaChart
          width={width}
          height={height}
          data={spendingData}
          margin={{
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1288e8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1288e8" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickLine={false}
            tickMargin={-30}
            axisLine={false}
            stroke="#ccc"
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#1288e8"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default SpendingChartComponent;
