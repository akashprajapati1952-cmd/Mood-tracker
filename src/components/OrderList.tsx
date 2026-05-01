import axios from 'axios'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {type Order } from '../Models/models.ts'
import {schema, normalize} from 'normalizr'
import {getOrders} from '../Selectors/orders-selector.ts'

const OrderList= ()=>{
  const orders=useSelector(getOrders)
  useEffect(()=>{
    const productSchema=new schema.Entity('products');
    const orderSchema =new schema.Entity('orders', {products: [productSchema]});
    const OrderListSchema=[orderSchema]
    axios.get("https://dummyjson.com/carts").then((res)=>{
      const nrmlzData=normalize(res.data.carts, OrderListSchema)
      console.log(nrmlzData)
      
    })
  },[])
  return <div>helow guys</div>
}
export default OrderList