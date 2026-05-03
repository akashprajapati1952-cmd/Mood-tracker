import axios from 'axios'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import {ordersLoaded} from '../Actions/actions.ts'
import { getOrdersDetail } from '../Selectors/orders-selector.ts';
import { Link } from 'react-router';

const OrderList= ()=>{
  const ordersDetail= useSelector(getOrdersDetail)
  const {ordersArr, ordersProducts}= ordersDetail
  const dispatch= useDispatch();
  useEffect(()=>{
    axios.get("https://dummyjson.com/carts").then((res)=>{
      dispatch(ordersLoaded(res.data.carts))
    })
  },[])
  
  return <div>
    {ordersProducts && Object.keys(ordersProducts).map((id)=>{
      const order= ordersArr.find((item)=>item.id === +id)
      return <div key={id} className='bg-green-700 border border-yellow-300'>
        <p>Order id {id}</p>
        <p>Total Products {order?.totalProducts}</p>
        <p>Total Quantity {order?.totalQuantity}</p>
        <p>Total Amount {order?.total}</p>
        <p>Total Discounted Amount {order?.discountedTotal}</p>
        <Link to={'/order/'+id} className='bg-indigo-600'>View Details</Link>
      </div>
       
    })}
  </div>
}
export default OrderList