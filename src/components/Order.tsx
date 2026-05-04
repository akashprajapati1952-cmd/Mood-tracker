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

export const OrderDetail:FC<Props> = ({order,  products}) =>{
  return <div>
    {order?.products.map((product)=>{
      const prd= products[product]
      console.log(prd)
      return <ProductDetail key={product} product={prd}></ProductDetail>
    })}
  </div>
}
const mapStateToProps= (state: State, ownProps: Partial<Props>)=>{
  const orderId= +ownProps.orderId
  return{
    order:state.orders.orders[orderId],
    products: state.products.products
  }
}
const newfunc=withOrderId(OrderDetail)
export default connect(mapStateToProps)(newfunc)