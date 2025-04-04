export type CardType = 'main' | 'near' | 'favorite';

export type CardClassType = {
  classNamesCard: string;
  classNamesImgWrap: string;
  imgHeight: string;
  imgWidth: string;
  classNamesInfo: string;
  classNamesBookmark: string;
}
export type CardClassKeyType = keyof CardClassType;
