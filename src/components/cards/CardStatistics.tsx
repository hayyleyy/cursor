import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const StatisticsContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 0.2rem;
  max-width: 370px;
  height: 310px;
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

const CustomLegend = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #2b3674;
`;

const LegendDot = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const CardStatistics = () => {
  const data = [
    { name: "DBL Bank", value: 35, color: "#4318FF" },
    { name: "BRC Bank", value: 25, color: "#6C72FF" },
    { name: "ABM Bank", value: 20, color: "#05CD99" },
    { name: "MCP Bank", value: 20, color: "#FFB547" },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <StatisticsContainer>
      <ChartContainer>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            innerRadius={60}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
      <CustomLegend>
        {data.map((item, index) => (
          <LegendItem key={`legend-${index}`}>
            <LegendDot color={item.color} />
            {item.name}
          </LegendItem>
        ))}
      </CustomLegend>
    </StatisticsContainer>
  );
};

export default CardStatistics;
