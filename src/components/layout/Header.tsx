import styled from 'styled-components';
import { FiSearch, FiSettings, FiBell } from 'react-icons/fi';

interface HeaderProps {
  title: string;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: #2B3674;
  font-weight: 700;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SearchContainer = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 30px;
  border: none;
  background: white;
  width: 280px;
  font-size: 0.875rem;
  color: #2B3674;
  
  &::placeholder {
    color: #A3AED0;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #A3AED0;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #A3AED0;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #2B3674;
  }
`;

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <HeaderRight>
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search for something" />
        </SearchContainer>
        <IconButton>
          <FiBell size={20} />
        </IconButton>
        <IconButton>
          <FiSettings size={20} />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header; 