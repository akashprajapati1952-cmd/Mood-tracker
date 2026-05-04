import {useParams} from 'react-router-dom'
import React from 'react'


const withOrderId =(Component: React.ComponentType)=>{
  const params=useParams();
  const orderId=params.orderId
  return <Component orderId={orderId}/>
}
export default withOrderId