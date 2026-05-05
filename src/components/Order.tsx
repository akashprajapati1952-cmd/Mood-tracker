import {type  FC } from 'react'
import { connect } from 'react-redux'
import ProductDetail from './Product'
import {type Order, type Product} from '../Models/models.ts'
import type { State } from '../Store.ts';
import withOrderId from './WithOrderId.tsx'
interface Props{
  order: Order;
  products: {[id: number]: Product}
  orderId:number;
  
}

export const OrderDetail:FC<Props> = ({order,  products, orderId}) =>{
  return <div>
    {order?.products.map((product)=>{
      const prd= products[product]
      console.log(prd)
      return <ProductDetail key={product} product={prd}></ProductDetail>
    })}
  </div>
}
const mapStateToProps= (state: State, ownProps: Props)=>{
  const orderId= ownProps.orderId!
  console.log(orderId)
  return{
    order:state.orders.orders[2],
    products: state.products.products
  }
}
export default connect(mapStateToProps)(OrderDetail)