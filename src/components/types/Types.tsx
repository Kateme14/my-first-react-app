export enum CardVariant {
    Large = 'large',
    Medium = 'medium',
    Small = 'small',
  }
  
  export type CardProps = {
    date: string
    title: string
    imgSrc?: string
    text: string
    variant: CardVariant
  }