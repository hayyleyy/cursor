import styled from 'styled-components';

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  variant?: 'primary' | 'secondary' | 'white';
}

const CardContainer = styled.div<{ variant?: 'primary' | 'secondary' | 'white' }>`
  background: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return 'linear-gradient(225deg, #2D60FF 0%, #539BFF 100%)';
      case 'secondary':
        return 'linear-gradient(225deg, #4C49ED 0%, #0A06F4 100%)';
      case 'white':
        return '#FFFFFF';
      default:
        return 'linear-gradient(225deg, #2D60FF 0%, #539BFF 100%)';
    }
  }};
  border-radius: 20px;
  padding: 1.5rem;
  color: ${({ variant }) => variant === 'white' ? '#2B3674' : 'white'};
  position: relative;
  min-width: 300px;
  aspect-ratio: 1.6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const BalanceSection = styled.div`
  flex: 1;
`;

const BalanceLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 0.25rem;
  text-align: left;
`;

const Balance = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
`;

const ChipIcon = styled.div`
  width: 45px;
  height: 35px;
  background: linear-gradient(225deg, #FFB947 0%, #FFD572 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -5px;
    right: -5px;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -5px;
    bottom: -5px;
    width: 1px;
    background: rgba(0, 0, 0, 0.1);
  }
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
  text-align: left;
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: 0.875rem;
  
  > div {
    text-align: left;
    
    > div:first-child {
      opacity: 0.8;
      margin-bottom: 0.25rem;
    }
    
    > div:last-child {
      font-weight: 500;
    }
  }
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
      <TopSection>
        <BalanceSection>
          <BalanceLabel>Balance</BalanceLabel>
          <Balance>${balance.toLocaleString()}</Balance>
        </BalanceSection>
        <ChipIcon />
      </TopSection>
      <div>
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
        <CardNumber>{cardNumber}</CardNumber>
      </div>
    </CardContainer>
  );
};

export default CreditCard; 