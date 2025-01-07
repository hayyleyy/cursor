import styled from "styled-components";
import { Title } from "../../atoms/Text/Title";
import { CardBase } from "../../atoms/Card/CardBase";
import { StatisticsChart } from "../../molecules/StatisticsChart/StatisticsChart";

const StatisticsContainer = styled(CardBase)`
  width: 350px;
  height: 380px;
  overflow-y: auto;
`;

export const CardStatisticsSection = () => {
  const data = [
    { name: "DBL Bank", value: 35, color: "#4318FF" },
    { name: "BRC Bank", value: 25, color: "#6C72FF" },
    { name: "ABM Bank", value: 20, color: "#05CD99" },
    { name: "MCP Bank", value: 20, color: "#FFB547" },
  ];

  return (
    <StatisticsContainer>
      <Title>Card Expense Statistics</Title>
      <StatisticsChart data={data} />
    </StatisticsContainer>
  );
}; 