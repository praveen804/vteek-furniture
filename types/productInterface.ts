
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
