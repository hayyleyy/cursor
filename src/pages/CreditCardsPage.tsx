import styled from "styled-components";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import CardStatistics from "../components/cards/CardStatistics";
import CardList from "../components/cards/CardList";
import NewCardForm from "../components/cards/NewCardForm";
import CardSettings from "../components/cards/CardSettings";
import CreditCard from "../components/cards/CreditCard";

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #2b3674;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: left;
  padding-left: 0.5rem;
`;

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
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  min-width: min-content;

  > * {
    flex-shrink: 0;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const StatisticsSection = styled.div`
  width: 100%;
`;

const ListSection = styled.div`
  width: 100%;
  min-width: 0;
`;

const FormSection = styled.div`
  grid-column: 1;
`;

const SettingsSection = styled.div`
  grid-column: 2;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CreditCardsPage = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <Header title="Credit Cards" />
        <Section>
          <SectionTitle>My Cards</SectionTitle>
          <CardsGrid>
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              cardNumber="3778 **** **** 1234"
              validThru="12/22"
              variant="primary"
            />
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              cardNumber="3778 **** **** 1234"
              validThru="12/22"
              variant="secondary"
            />
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              cardNumber="3778 **** **** 1234"
              validThru="12/22"
              variant="white"
            />
          </CardsGrid>
        </Section>
        <ContentGrid>
          <StatisticsSection>
            <SectionTitle>Card Expense Statistics</SectionTitle>
            <CardStatistics />
          </StatisticsSection>
          <ListSection>
            <SectionTitle>Card List</SectionTitle>
            <CardList />
          </ListSection>
          <FormSection>
            <SectionTitle>Add New Card</SectionTitle>
            <NewCardForm />
          </FormSection>
          <SettingsSection>
            <SectionTitle>Card Settings</SectionTitle>
            <CardSettings />
          </SettingsSection>
        </ContentGrid>
      </MainContent>
    </PageContainer>
  );
};

export default CreditCardsPage;
