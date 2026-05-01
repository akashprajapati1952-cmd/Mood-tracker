import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadProducts, productsLoaded} from '../Actions/actions.ts';
import axios from 'axios';
import {getProduct} from '../Selectors/products-selector.ts'
import Product from './Product.tsx'

const ProductList= ()=>{
  const loading=useSelector((state)=> state.products.loading);
  const products=useSelector(getProduct)
  const dispatch= useDispatch();
  useEffect(()=>{
    console.log("hello world")
    axios.get("https://dummyjson.com/products").then((res)=>{dispatch(productsLoaded(res.data.products))})
  }, [dispatch])
  if(loading) {return <div>loading</div>}
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  {products.map(product => (
    <Product key={product.id} product={product} />
  ))}
</div>
}
export default ProductList