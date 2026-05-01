import {happyReducer, sadReducer} from './Reducers/moodReducers.ts'
import {createStore, combineReducers} from 'redux'
import {produce} from 'immer'
import {type Action } from "./Models/models.ts"
import {CLEAR} from './Actions/actions.ts'
import { productReducer } from './Reducers/products.ts'

const moodReducer= combineReducers({
  happyMoment: happyReducer,
  sadMoment: sadReducer,
  products: productReducer
})
const rootReducer = (state: State | undefined, action: Action) => {
  if (action.type === CLEAR) {
    return moodReducer(undefined, action);
  }
  return moodReducer(state, action);
};
export type State= ReturnType<typeof moodReducer>

export const store= createStore(rootReducer)