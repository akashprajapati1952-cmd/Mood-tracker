import { useDispatch} from 'react-redux'
import {action2} from './Redux.tsx'
const Sad=()=> {
  const dispatch=useDispatch();
  function handleClick(){
    dispatch(action2)
  }
  return (
    <div className="flex flex-col items-center">
      <h1>Are you Sad?</h1>
      <button onClick={handleClick} className="bg-red-700 px-2 py-1">Yes</button>
    </div>
  )
}
export default Sad