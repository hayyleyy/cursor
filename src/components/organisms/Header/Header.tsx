import styled from "styled-components";
import { Title } from "../../atoms/Text/Title";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { UserProfile } from "../../molecules/UserProfile/UserProfile";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <Title size="large">Credit Cards</Title>
      </LeftSection>
      <RightSection>
        <SearchBar />
        <UserProfile />
      </RightSection>
    </HeaderContainer>
  );
}; 