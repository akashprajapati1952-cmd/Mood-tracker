import { type State} from '../Store.ts'
import {createSelector} from 'reselect'

export const getOrdersDetail = createSelector(
  (state: State) => state.orders.orders,
  (state: State) => state.products.products,
  (state: State) => state.orders.ordersProducts,
  (orders, products, ordersProducts) => {
    const ordersArr=Object.keys(orders).map((id)=>orders[+id])
    return {ordersArr, ordersProducts}
  }
);


