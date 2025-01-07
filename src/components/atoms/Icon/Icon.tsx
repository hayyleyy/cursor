import styled from "styled-components";

export const IconWrapper = styled.div<{ size?: number }>`
  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8f9bba;
  cursor: pointer;
  
  &:hover {
    color: #2b3674;
  }
`; 