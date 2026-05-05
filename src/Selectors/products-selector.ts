import { createSelector } from 'reselect';
import { type State} from '../Store.ts'

export const getProduct=createSelector(
  (state: State) => state.products.products,
  (products)=>{
    const productsArr=Object.keys(products).map((id)=>products[+id])
    return productsArr
  }
);

  