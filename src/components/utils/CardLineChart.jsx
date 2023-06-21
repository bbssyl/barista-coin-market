import { Line, LineChart, ResponsiveContainer } from "recharts";
const CardLineChart = ({ width = "100%", height = 100, data = [] }) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data} width={width} height={height}>
        <Line
          dataKey="pv"
          stroke="#3c3c"
          strokeWidth={4}
          dot={false}
          className="drop-shadow-green"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CardLineChart;
