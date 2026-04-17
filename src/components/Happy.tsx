import { useDispatch} from 'react-redux'
import {action1} from './Redux.tsx'


const Happy=()=> {
  const dispatch=useDispatch();
  function handleClick(){
    dispatch(action1)
  }
  return (
    <div className="flex flex-col items-center">
      <h1>Are you happy?</h1>
      <button onClick={handleClick} className="bg-indigo-700 px-2 py-1">Yes</button>
    </div>
  )
}
export default Happy