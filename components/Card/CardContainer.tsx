// src/components/Card/CardContainer.tsx
import styled from 'styled-components';

const CardContainer = styled.div<{ borderRadius: number }>`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: ${(props) => props.borderRadius}px;
  overflow: hidden;
`;

export default CardContainer;
