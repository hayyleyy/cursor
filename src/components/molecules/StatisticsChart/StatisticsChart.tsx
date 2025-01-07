import styled from "styled-components";
import { PieChart, Pie, Cell } from "recharts";
import { CardBase } from "../../atoms/Card/CardBase";

const ChartContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export const StatisticsChart = ({ data }: { data: Array<any> }) => {
  return (
    <ChartContainer>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
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
  );
}; 