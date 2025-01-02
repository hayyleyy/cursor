import styled from 'styled-components';

const StatisticsContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #2B3674;
  margin-bottom: 1.5rem;
`;

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  max-width: 300px;
  margin: 0 auto;
`;

const Legend = styled.div`
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
  color: #2B3674;
`;

const LegendDot = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const CardStatistics = () => {
  return (
    <StatisticsContainer>
      <Title>Card Expense Statistics</Title>
      <ChartContainer>
        {/* 여기에 도넛 차트 구현 (recharts 또는 다른 차트 라이브러리 사용 권장) */}
      </ChartContainer>
      <Legend>
        <LegendItem>
          <LegendDot color="#4318FF" />
          DBL Bank
        </LegendItem>
        <LegendItem>
          <LegendDot color="#6C72FF" />
          BRC Bank
        </LegendItem>
        <LegendItem>
          <LegendDot color="#05CD99" />
          ABM Bank
        </LegendItem>
        <LegendItem>
          <LegendDot color="#FFB547" />
          MCP Bank
        </LegendItem>
      </Legend>
    </StatisticsContainer>
  );
};

export default CardStatistics; 