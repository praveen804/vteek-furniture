export type Property = {
  key: string;
  value: string;
};

export type FurnitureItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  discounts: string;
  category: string;
  properties: Property[];
};
