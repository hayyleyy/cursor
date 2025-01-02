import styled from 'styled-components';
import { FiCreditCard } from 'react-icons/fi';

interface CardListItem {
  id: string;
  cardType: string;
  bank: string;
  cardNumber: string;
  cardHolder: string;
}

const ListContainer = styled.div`
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #F4F7FE;
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CardInfo = styled.div`
  display: grid;
  gap: 0.25rem;
`;

const CardType = styled.div`
  color: #A3AED0;
  font-size: 0.875rem;
`;

const BankName = styled.div`
  color: #2B3674;
  font-weight: 500;
`;

const CardDetails = styled.div`
  display: grid;
  gap: 0.25rem;
  text-align: right;
`;

const CardNumber = styled.div`
  color: #2B3674;
  font-weight: 500;
`;

const CardHolder = styled.div`
  color: #A3AED0;
  font-size: 0.875rem;
`;

const ViewButton = styled.button`
  background: none;
  border: none;
  color: #4318FF;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CardList = () => {
  const cards: CardListItem[] = [
    {
      id: '1',
      cardType: 'Secondary',
      bank: 'DBL Bank',
      cardNumber: '**** **** 5600',
      cardHolder: 'William',
    },
    {
      id: '2',
      cardType: 'Secondary',
      bank: 'BRC Bank',
      cardNumber: '**** **** 4300',
      cardHolder: 'Michel',
    },
    {
      id: '3',
      cardType: 'Secondary',
      bank: 'ABM Bank',
      cardNumber: '**** **** 7560',
      cardHolder: 'Edward',
    },
  ];

  const getBankColor = (bank: string) => {
    const colors = {
      'DBL Bank': '#4318FF',
      'BRC Bank': '#6C72FF',
      'ABM Bank': '#05CD99',
      'MCP Bank': '#FFB547',
    };
    return colors[bank as keyof typeof colors] || '#4318FF';
  };

  const handleViewDetails = (id: string) => {
    console.log('View details for card:', id);
  };

  return (
    <ListContainer>
      <Title>Card List</Title>
      <List>
        {cards.map((card) => (
          <ListItem key={card.id}>
            <IconWrapper color={getBankColor(card.bank)}>
              <FiCreditCard size={20} />
            </IconWrapper>
            <CardInfo>
              <CardType>{card.cardType}</CardType>
              <BankName>{card.bank}</BankName>
            </CardInfo>
            <CardDetails>
              <CardNumber>{card.cardNumber}</CardNumber>
              <CardHolder>{card.cardHolder}</CardHolder>
            </CardDetails>
            <ViewButton onClick={() => handleViewDetails(card.id)}>
              View Details
            </ViewButton>
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

export default CardList; 