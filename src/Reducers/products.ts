import   {PRODUCTS_LOADED, LOAD_PRODUCTS,ORDERS_LOADED} from '../Actions/actions.ts'
import {type Action , type Product} from '../Models/models.ts'
import {produce} from 'immer'



interface State{
  products: {[id: number]: Product};
  loading: boolean;
}
const initialState={
  products:{},
  loading: true
}

export const productReducer=(state: State= initialState , action: Action)=>{
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft)=>{
        draft.loading= true;
      })
    case PRODUCTS_LOADED:
      return produce(state, (draft)=>{
        const prd= (action.payload as Product[])?.reduce<{[id: number]: Product}>((prev: {[id: number]: Product} | {}, cur: Product)=>{
          const filteredProduct: Product = {
            id: cur.id,
            title: cur.title,
            price: cur.price,
            category: cur.category,
            thumbnail: cur.thumbnail,
            rating: cur.rating,
            stock: cur.stock,
            brand: cur.brand,
            discountPercentage: cur.discountPercentage,
          };
          return {...prev, [cur.id]:filteredProduct}
        },{})
        draft.products= prd
        draft.loading= false;
      })
    case ORDERS_LOADED:
      return produce(state,(draft)=>{
        draft.products={...draft.products, ...action.payload?.products}
      })
    default:
      return state;
  }
}