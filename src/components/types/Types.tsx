export enum CardVariant {
    Large = 'large',
    Medium = 'medium',
    Small = 'small',
  }

  export type PostType = {
    id: string
    variant: CardVariant
    date: string
    title: string
    imgSrc?: string
    text: string
  }
  
  export interface CardProps extends PostType {
    variant: CardVariant
  }