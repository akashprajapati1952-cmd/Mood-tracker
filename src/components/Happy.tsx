import { useDispatch} from 'react-redux'
import {action1} from './Redux.tsx'
import {useState} from 'react'


const Happy=()=> {
  const dispatch=useDispatch();
  const [happyValue, setHappyValue]=useState(0)
  function handleClick(){
    dispatch(action1)
  }
  return (
    <div className="flex flex-col items-center bg-indigo-700 p-5 gap-2">
      <h1>Are you happy?</h1>
      <input className="border border-yellow-700" placeholder="Enter points" type="text" onChange={(e)=>{setHappyValue(e.target.value)}}/>
      <button onClick={handleClick} className="bg-red-700 px-4 py-1">Yes</button>
    </div>
  )
}
export default Happy