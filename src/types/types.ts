export interface Goods {
  name: string;
  avatar: string;
  price: number;
  id: string;
  remainder: string;
}
export interface Count extends Goods {
  quantity: number;
}
export type GoodState = {
  goodsList: Goods[];
  error: boolean;
  loading: boolean;
  basket: Count[];
};
export type QuantityType = { id: string; operation: string };
