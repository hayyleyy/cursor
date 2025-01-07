import styled from "styled-components";
import { SearchInput } from "../../atoms/Input/SearchInput";
import { IconWrapper } from "../../atoms/Icon/Icon";
import { FiSearch } from "react-icons/fi";

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const SearchIconWrapper = styled(IconWrapper)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <FiSearch />
      </SearchIconWrapper>
      <SearchInput placeholder="Search for something" />
    </SearchContainer>
  );
}; 