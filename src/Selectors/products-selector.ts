import { type State} from '../Store.ts'

export const getProduct=(state: State )=>{
  const products= state.products.products;
  const productsArr=Object.keys(products).map((id)=>products[+id])
  return productsArr
}