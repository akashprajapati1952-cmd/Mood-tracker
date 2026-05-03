export interface Moment{
  count: number;
  when: string;
}
export interface Action{
  type: string;
  payload?: any;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category?: string;
  thumbnail: string;
  rating?: number;
  stock?: number;
  brand?: string;
  discountPercentage?: number;
}

export interface Order {
  id: number;
  products: number[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface OrdersProducts{
  [pId: number]:{quantity: number, total: number,discountedTotal: number}
}