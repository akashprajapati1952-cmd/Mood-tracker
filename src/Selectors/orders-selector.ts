import { type State} from '../Store.ts'

export const getOrdersDetail=(state: State )=>{
  const orders= state.orders.orders;
  const ordersArr=Object.keys(orders).map((id)=>orders[+id])
  const ordersProducts= state.orders.ordersProducts;
  return {ordersArr, ordersProducts}
}