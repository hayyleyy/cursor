import styled from "styled-components";
import { SearchInput } from "../../atoms/Input/SearchInput";
import { IconWrapper } from "../../atoms/Icon/Icon";
import { FiSearch } from "react-icons/fi";

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`;

const SearchIconWrapper = styled(IconWrapper)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8F9BBA;
`;

const StyledSearchInput = styled(SearchInput)`
  background-color: #F4F7FE;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  border-radius: 30px;
  width: 100%;
  font-size: 0.875rem;
  color: #2B3674;
  
  &::placeholder {
    color: #8F9BBA;
  }
`;

export const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <FiSearch size={20} />
      </SearchIconWrapper>
      <StyledSearchInput placeholder="Search for something" />
    </SearchContainer>
  );
}; 