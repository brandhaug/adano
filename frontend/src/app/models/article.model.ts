export interface Article {
  title: string;
  caption: string;
  body: string;
  headerLarge: {
    url: string;
  };
  headerMedium: {
    url: string;
  };
  headerSmall: {
    url: string;
  };
  url: string;
  readingTime: number;
  createdAt: Date;
  order: number;
}
