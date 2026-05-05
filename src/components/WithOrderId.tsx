import {useParams} from 'react-router-dom'
import React from 'react'
interface Props{
  orderId: number;
}

function withOrderId<T extends Props> (Component: React.ComponentType<T>){
  return (props: Omit<T, keyof Props>) =>{
    const params=useParams();
    const orderId=+params.orderId!
    return <Component {...(props as T)} orderId={orderId}/>
  }
}
export default withOrderId