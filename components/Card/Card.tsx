// src/components/Card/Card.tsx
import React from 'react';
import { CardProps, RenderLevel } from '../../types';
import CardContainer from './CardContainer';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Badge from './Badge';
import RedirectIcon from './RedirectIcon';

const Card: React.FC<CardProps> = ({ level, borderRadius = 8 }) => {
  const renderHeader = () => (
    <Header borderRadius={0}>
      <h1>Título</h1>
      <Badge>Badge</Badge>
      <RedirectIcon>🔗</RedirectIcon>
    </Header>
  );

  const renderBody = () => (
    <Body borderRadius={0}>
      <img src="foto.jpg" alt="Foto" />
      <h2>Título</h2>
      <p>Subtítulo</p>
    </Body>
  );

  return (
    <CardContainer borderRadius={borderRadius}>
      {renderHeader()}
      {level !== RenderLevel.LOW && renderBody()}
      {level === RenderLevel.HIGH && <Footer>Footer Content</Footer>}
    </CardContainer>
  );
};

export default Card;
