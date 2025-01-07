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
`;

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #f8f9fd;
`;

const MainContent = styled.div`
  padding: 2rem 3rem;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  min-width: min-content;

  > * {
    flex-shrink: 0;
  }
`;

const TopSection = styled.div`
  display: grid;
  height: 390px;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const StatisticsSection = styled.div`
  width: 350px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ListSection = styled.div`
  width: 730px;
  min-width: 0;
  height: 380px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CreditCardsPage = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContainer>
        <Header title="Credit Cards" />
        <ContentWrapper>
          <MainContent>
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
            <TopSection>
              <StatisticsSection>
                <SectionTitle>Card Expense Statistics</SectionTitle>
                <CardStatistics />
              </StatisticsSection>
              <ListSection>
                <SectionTitle>Card List</SectionTitle>
                <CardList />
              </ListSection>
            </TopSection>
            <ContentGrid>
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
        </ContentWrapper>
      </MainContainer>
    </PageContainer>
  );
};

export default CreditCardsPage;
