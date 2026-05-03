import {type OrdersProducts} from '../Models/models.ts'
import {schema, normalize } from 'normalizr'
export const MOOD_SAD="Mood is sad";
export const MOOD_HAPPY="Mood is happy";
export const CLEAR="Clear";
export const LOAD_PRODUCTS="LOAD_PRODUCTS";
export const PRODUCTS_LOADED="PRODUCTS_LOADED";
export const LOAD_ORDERS="LOAD_ORDERS";
export const ORDERS_LOADED="ORDERS_LOADED";

export const sadAction= (value: string) => {
  return {
    type: MOOD_SAD,
    payload: {count: Number(value), when: new Date().toLocaleString()}
  }
}
  
export const happyAction =(value: string)=>{
  return {
    type:MOOD_HAPPY ,
    payload: {count: Number(value), when: new Date().toLocaleString()} 
  }

}
export const clearAction= ()=>{
  return {
    type: CLEAR
  }
}
export const loadProducts=()=>{
  return {
    type: LOAD_PRODUCTS
  }
}
export const productsLoaded=(products: any[])=>{
  return {
    type: PRODUCTS_LOADED,
    payload: products
  }
}
export const loadOrders=()=>{
  return {
    type:LOAD_ORDERS
  }
}
export const ordersLoaded=(orders: any)=>{
  const ordersProducts: {[orderId: number]: OrdersProducts}={}
  const editedData=orders.map((order:any)=>({
    ...order, 
    products: order.products.map((product: any)=>{
      if (!ordersProducts[order.id]) {
        ordersProducts[order.id] = {};
      }
      ordersProducts[order.id][product.id]={
        quantity: product.quantity,
        total: product.total,
        discountedTotal: product.discountedTotal
      }
      return (
        {
          id: product.id,
          title:product.title,
          price:product.price,
          discountPercentage:product.discountPercentage,
          thumbnail: product.thumbnail
        }
      )
    })
  }))

  const productSchema=new schema.Entity('products',{},{
    processStrategy: (value)=>({
      id: value.id,
      title: value.title,
      price: value.price,
      thumbnail: value.thumbnail,
    })
  });
       
  const orderSchema =new schema.Entity('orders', {products: [productSchema],  });
  const normalizedData= normalize(editedData, [orderSchema])
  normalizedData.entities.ordersProducts=ordersProducts
  
  return {
    type: ORDERS_LOADED,
    payload: normalizedData.entities
  }
}