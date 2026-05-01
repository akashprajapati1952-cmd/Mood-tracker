export const MOOD_SAD="Mood is sad";
export const MOOD_HAPPY="Mood is happy";
export const CLEAR="Clear";
export const LOAD_PRODUCTS="LOAD_PRODUCTS";
export const PRODUCTS_LOADED="PRODUCTS_LOADED";

export const sadAction= (value) => {
  return {
    type: MOOD_SAD,
    payload: {count: Number(value), when: new Date().toLocaleString()}
  }
}
  
export const happyAction =(value)=>{
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
export const productsLoaded=(products)=>{
  return {
    type: PRODUCTS_LOADED,
    payload: products
  }
}
export const getOrder=()=>{
  return {
    type:loadOrders
  }
}