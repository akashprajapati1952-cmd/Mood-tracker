import {happyReducer, sadReducer} from './Reducers.tsx'
import {createStore, combineReducers} from 'redux'
import {produce} from 'immer'
interface Moment{
  count: number;
  when: string;
}
interface Action{
  type: string;
  payload?: Moment;
}

const moodReducer= combineReducers({
  happyMoment: happyReducer,
  sadMoment: sadReducer
})
const rootReducer = (state: State | undefined, action: Action) => {
  if (action.type === 'clear') {
    return moodReducer(undefined, action);
  }
  return moodReducer(state, action);
};
export type State= ReturnType<typeof moodReducer>

export const store= createStore(rootReducer)