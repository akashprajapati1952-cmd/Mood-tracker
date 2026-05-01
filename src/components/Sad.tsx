import { useDispatch} from 'react-redux'
import {useState} from 'react'
import {sadAction} from '../Actions/actions.ts'


const Sad=()=> {
  const dispatch=useDispatch();
  const [sadValue, setSadValue]=useState<string>("")
  
  function handleClick(){
    dispatch(sadAction(sadValue))
    setSadValue("")
  }
  return (
    <div className="flex flex-col items-center bg-indigo-700 p-5 gap-2">
      <h1>Are you Sad?</h1>
      <input value={sadValue} className="border border-yellow-700 w-25" placeholder="Enter points" type="number" onChange={(e)=>{setSadValue(e.target.value)}}/>
      <button disabled={!sadValue} onClick={handleClick} className="bg-red-700 px-4 py-1">Yes</button>
    </div>
  )
}
export default Sad