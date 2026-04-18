import { AnyAction} from 'redux'
import {createStore} from 'redux'

export interface State{
  happyCount: number;
  sadCount: number;
}

const initialState={
  happyCount: 0,
  sadCount: 0
}

export const action1={
  type: "Mood is happy",
  payload: 5}
export const action2={
  type: "Mood is sad",
  payload: 5
}

const moodReducer= (state: State= initialState, action: AnyAction)=>{
  if(action.type === "Mood is happy"){
    return {...state, happyCount: state.happyCount + 1}
  }
  if(action.type === "Mood is sad"){
    return {...state, sadCount: state.sadCount + 1}
  }
  return {...state}
}

export const store= createStore(moodReducer)