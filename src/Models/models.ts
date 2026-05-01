export interface Moment{
  count: number;
  when: string;
}
export interface Action{
  type: string;
  payload?: Moment;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  rating?: number;
  stock?: number;
  brand?: string;
  discountPercentage?: number;
}

interface Order {
  id: number;
  products: number[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}