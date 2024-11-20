
export interface ProductLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  topBar:  React.ReactNode;
}

export interface ProductProps {
  _id: string;
  id: string;
  title: string;
  category: string;
  location: string;
  price: number;
  image: string;
  description: string;
}


export interface Dimension {
  length: string;
  width: string;
  height: string;
}

export interface Product {
  dimension: Dimension;
  _id: string;
  id: string;
  title: string;
  description: string;
  about: string;
  category: string;
  image: string;
  origin: string;
  originalPrice: number;
  discount: number;
  finalPrice: number;
  quantity: number;
  material: string;
  color: string[];
  stock: number;
  rating: number;
  brand: string;
  weight: number;
  location: string[];
}

export interface ProductResponse {
  success: boolean;
  message: string;
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  products: Product[];
}


export interface Review {
  _id: string;
  userId: string;
  productId: string;
  comment: string;
  rating: number;
  date: string; // ISO 8601 string format
  __v: number;
}

export interface SingleProductResponse {
  success: boolean;
  message: string;
  product: Product;
  review: Review[];
}