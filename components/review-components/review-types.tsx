type User = {
  _id: string;
  name: string;
  email: string;
};

type Product = {
  _id: string;
  title: string;
  category: string;
  image: string;
  finalPrice: number;
};
export type Review = {
  _id: string;
  userId: User;
  productId: Product;
  comment: string;
  rating: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
