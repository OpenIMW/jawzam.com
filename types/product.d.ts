export interface IProduct {
  id: string;
  image: string;
  name: string;
  description?: string;
  price: number;
  featured?: boolean;
}
