import {type Action, type Moment } from './Redux'
import {produce} from 'immer'

export const sadReducer=(sadState: Moment[]=[], action: Action)=>{
  return produce(sadState, draft => {
    if (action.type === "Mood is sad" && action.payload) {
      draft.push(action.payload);
    }
  });
}
export const happyReducer=(happyState: Moment[]=[], action: Action)=>{
  return produce(happyState, draft => {
    if (action.type === "Mood is happy" && action.payload) {
      draft.push(action.payload);
    }
  });
}