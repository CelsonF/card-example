// Card.styles.ts
import styled from 'styled-components';

export const CardContainer = styled.div<{ borderRadius: number }>`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  overflow: hidden;
`;

export const Header = styled.div<{ borderRadius: number }>`
  padding: 16px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius}px;
`;

export const Body = styled.div<{ borderRadius: number }>`
  padding: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  border:1px solid #ccc;
  border-width:1px 0px 1px 0px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
`;

export const Footer = styled.div`
  padding: 16px;
  background: #f5f5f5;
  text-align: center;
`;

export const Badge = styled.span`
  background-color: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const RedirectIcon = styled.span`
  cursor: pointer;
  font-size: 16px;
`;
