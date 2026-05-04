import {type Action , type Order, type OrdersProducts} from '../Models/models.ts'
import   {ORDERS_LOADED, LOAD_ORDERS} from '../Actions/actions.ts'
import {produce} from 'immer'


interface State{
  orders: {[id: number]: Order};
  ordersProducts: {[orderId: number]: OrdersProducts};
  loading: boolean;
}
const initialState={
  orders:{},
  ordersProducts: {},
  loading: true
}


export const orderReducer=(state: State=initialState, action: Action)=>{
  switch (action.type) {
    case LOAD_ORDERS:
        return produce(state, (draft)=>{
          draft.loading= true;
        })
    case ORDERS_LOADED:
      return produce(state, (draft)=>{
        draft.loading= false;
        draft.orders=action.payload?.orders
        draft.ordersProducts=action.payload?.ordersProducts
      })
    default:
      return state
  }
}