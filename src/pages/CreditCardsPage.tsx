import styled from "styled-components";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import CardStatistics from "../components/cards/CardStatistics";
import CardList from "../components/cards/CardList";
import NewCardForm from "../components/cards/NewCardForm";
import CardSettings from "../components/cards/CardSettings";
import CreditCard from "../components/cards/CreditCard";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fd;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CreditCardsPage = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <Header title="Credit Cards" />
        <CardsGrid>
          <CreditCard
            balance={5756}
            cardHolder="Eddy Cusuma"
            cardNumber="3778 **** **** 1234"
            validThru="12/22"
            variant="primary"
          />
          {/* Add more cards as needed */}
        </CardsGrid>
        <ContentGrid>
          <div>
            <CardStatistics />
            <NewCardForm />
          </div>
          <div>
            <CardList />
            <CardSettings />
          </div>
        </ContentGrid>
      </MainContent>
    </PageContainer>
  );
};

export default CreditCardsPage;
