// src/components/Card/Header.tsx
import styled from 'styled-components';

const Header = styled.div<{ borderRadius: number }>`
  padding: 16px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.borderRadius}px;
`;

export default Header;
