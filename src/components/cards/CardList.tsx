import styled from "styled-components";
import { FiCreditCard } from "react-icons/fi";

interface CardListItem {
  id: string;
  cardType: string;
  bank: string;
  cardNumber: string;
  cardHolder: string;
}

const ListContainer = styled.div`
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 2rem;
  height: 380px;
  overflow-y: auto;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 20px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background-color: ${({ color }) => `${color}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.5fr 1fr auto;
  align-items: center;
  gap: 1rem;
  min-width: 0;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
  overflow: hidden;
`;

const Label = styled.div`
  color: #2b3674;
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Value = styled.div`
  color: #a3aed0;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ViewButton = styled.button`
  background: none;
  border: none;
  color: #4318ff;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  padding-left: 1rem;
  flex-shrink: 0;
`;

const CardList = () => {
  const cards: CardListItem[] = [
    {
      id: "1",
      cardType: "Secondary",
      bank: "DBL Bank",
      cardNumber: "**** **** 5600",
      cardHolder: "William",
    },
    {
      id: "2",
      cardType: "Secondary",
      bank: "BRC Bank",
      cardNumber: "**** **** 4300",
      cardHolder: "Michel",
    },
    {
      id: "3",
      cardType: "Secondary",
      bank: "ABM Bank",
      cardNumber: "**** **** 7560",
      cardHolder: "Edward",
    },
  ];

  const getBankColor = (bank: string) => {
    const colors = {
      "DBL Bank": "#4318FF",
      "BRC Bank": "#6C72FF",
      "ABM Bank": "#05CD99",
      "MCP Bank": "#FFB547",
    };
    return colors[bank as keyof typeof colors] || "#4318FF";
  };

  return (
    <ListContainer>
      <List>
        {cards.map((card) => (
          <ListItem key={card.id}>
            <IconWrapper color={getBankColor(card.bank)}>
              <FiCreditCard size={24} />
            </IconWrapper>
            <CardContent>
              <ContentItem>
                <Label>Card Type</Label>
                <Value>{card.cardType}</Value>
              </ContentItem>
              <ContentItem>
                <Label>Bank</Label>
                <Value>{card.bank}</Value>
              </ContentItem>
              <ContentItem>
                <Label>Card Number</Label>
                <Value>{card.cardNumber}</Value>
              </ContentItem>
              <ContentItem>
                <Label>Namain Card</Label>
                <Value>{card.cardHolder}</Value>
              </ContentItem>
              <ViewButton>View Details</ViewButton>
            </CardContent>
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

export default CardList;
