// types.ts
export enum RenderLevel {
  LOW = 'low',
  MID = 'mid',
  HIGH = 'high',
}

export interface CardProps {
  level: RenderLevel;
  borderRadius?: number;
}
