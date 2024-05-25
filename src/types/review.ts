export type Review = {
  id: number;
  username: string;
  src: string;
  rating: number; // 0% - 100%
  text: string;
  date: string;
};

export type Reviews = Review[];
