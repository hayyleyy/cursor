import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: none;
  border-radius: 30px;
  background-color: #f4f7fe;
  font-size: 0.875rem;
  color: #2b3674;
  
  &::placeholder {
    color: #8f9bba;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(67, 24, 255, 0.1);
  }
`; 