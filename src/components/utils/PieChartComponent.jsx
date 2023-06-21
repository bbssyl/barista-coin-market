import React, { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="text-xs"
      >
        {payload.name}
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 5}
        y={ey}
        textAnchor={textAnchor}
        fill="#ccc"
        className="min-[280px]:text-xs md:text-base"
      >{`$${value}`}</text>
    </g>
  );
};
const COLORS = ["#fff", "#1288e8", "#f7bc7a"];

const PieChartComponent = ({
  dataChart = [],
  width = "100%",
  height = 200,
  horizontal,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleChange = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className={`${horizontal ? "sm:flex gap-1 items-center" : null}`}>
      <ResponsiveContainer width={width} height={height}>
        <PieChart width={width} height={height}>
          <Pie
            stroke="0"
            data={dataChart}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={handleChange}
            cx={"50%"}
            cy={"50%"}
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
          >
            {dataChart.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        {dataChart.map((data, index) => {
          return (
            <div className="flex flex-col gap-1 p-3" key={data.name}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-tr from-white to-gray-600`}
                  ></div>
                  <span>{data.name}</span>
                </div>
                <span>${data.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChartComponent;
