import styled from 'styled-components';

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  variant?: 'primary' | 'secondary';
}

const CardContainer = styled.div<{ variant?: 'primary' | 'secondary' }>`
  background: ${({ variant }) => 
    variant === 'primary' ? '#4318FF' : '#6C72FF'};
  border-radius: 20px;
  padding: 1.5rem;
  color: white;
  position: relative;
  min-width: 300px;
  aspect-ratio: 1.6;
`;

const Balance = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
`;

const CardNumber = styled.div`
  font-size: 1.25rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: 0.875rem;
`;

const CreditCard: React.FC<CreditCardProps> = ({
  balance,
  cardHolder,
  cardNumber,
  validThru,
  variant = 'primary'
}) => {
  return (
    <CardContainer variant={variant}>
      <Balance>${balance.toLocaleString()}</Balance>
      <CardNumber>{cardNumber}</CardNumber>
      <CardDetails>
        <div>
          <div>CARD HOLDER</div>
          <div>{cardHolder}</div>
        </div>
        <div>
          <div>VALID THRU</div>
          <div>{validThru}</div>
        </div>
      </CardDetails>
    </CardContainer>
  );
};

export default CreditCard; 