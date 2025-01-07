import styled from "styled-components";

export const Title = styled.h2<{ size?: 'small' | 'medium' | 'large' }>`
  font-size: ${({ size = 'medium' }) => ({
    small: '1rem',
    medium: '1.5rem',
    large: '2rem'
  }[size])};
  color: #2b3674;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: left;
`; 