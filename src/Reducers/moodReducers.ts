import {type Action, type Moment } from '../Models/models.ts'
import {produce} from 'immer'
import {MOOD_HAPPY, MOOD_SAD} from '../Actions/actions.ts'

export const sadReducer=(sadState: Moment[]=[], action: Action)=>{
  return produce(sadState, draft => {
    if (action.type === MOOD_SAD && action.payload) {
      draft.push(action.payload);
    }
  });
}
export const happyReducer=(happyState: Moment[]=[], action: Action)=>{
  return produce(happyState, draft => {
    if (action.type === MOOD_HAPPY && action.payload) {
      draft.push(action.payload);
    }
  });
}