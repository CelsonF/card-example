import * as React from 'react';
import './style.css';
import { RenderLevel } from './types';
import Card from './components/Card/Card';

export default function App() {
  return (
    <div>
      <Card level={RenderLevel.LOW} borderRadius={16} />
      <br />
      <Card level={RenderLevel.MID} borderRadius={16} />
      <br />
      <Card level={RenderLevel.HIGH} borderRadius={16} />
    </div>
  );
}
