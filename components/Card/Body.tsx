// src/components/Card/Body.tsx
import styled from 'styled-components';

const Body = styled.div<{ borderRadius: number }>`
  padding: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  border:1px solid #ccc;
  border-width:1px 0 0 0;
  border-radius: ${(props) => props.borderRadius}px;
`;

export default Body;
