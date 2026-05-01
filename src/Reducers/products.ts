import   {PRODUCTS_LOADED, LOAD_PRODUCTS} from '../Actions/actions.ts'
import {type Action , type Product} from '../Models/models.ts'
import {produce} from 'immer'
import {schema, normalize} from 'normalizr'

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
        const prd= action.payload.reduce((prev:{[id: number]: Product}, cur)=>{
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
    default:
      return state;
  }
}