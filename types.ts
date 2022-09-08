export interface IMenu {
  id: number;
  title: string;
  slug: string;
}

export interface CardDescription {
  option: string;
  isTrue: boolean;
}

export interface ICard {
  id: number;
  image_src: string;
  title: string;
  description: CardDescription[];
}

export interface IWoodCards {
  cards: ICard[];
  ulStyles?: string;
}

export interface ISlide {
  id: number;
  src: string;
}

export interface ISlider {
  slides: ISlide[];
}
