
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
}
export const action2={
  type: "Mood is sad"
}

const moodReducer= (state: State= initialState, action)=>{
  if(action.type === "Mood is happy"){
    return {...state, happyCount: state.happyCount + 1}
  }
  if(action.type === "Mood is sad"){
    return {...state, sadCount: state.sadCount + 1}
  }
  return {...state}
}

export const store= createStore(moodReducer)