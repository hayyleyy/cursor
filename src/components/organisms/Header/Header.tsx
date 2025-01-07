import styled from "styled-components";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { UserProfile } from "../../molecules/UserProfile/UserProfile";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  color: #2B3674;
  font-weight: 700;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <PageTitle>{title}</PageTitle>
        <RightSection>
          <SearchBar />
          <UserProfile />
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
}; 