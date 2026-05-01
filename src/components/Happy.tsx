import { useDispatch} from 'react-redux'
import {useState} from 'react'
import {happyAction} from '../Actions/actions.ts'



const Happy=()=> {
  const dispatch=useDispatch();
  const [happyValue, setHappyValue]=useState<string>("")
  
  function handleClick(){
    dispatch(happyAction(happyValue))
    setHappyValue("")
  }
  return (
    <div className="flex flex-col items-center bg-indigo-700 p-5 gap-2">
      <h1>Are you happy?</h1>
      <input value={happyValue} className="border border-yellow-700 w-25" placeholder="Enter points" type="number" onChange={(e)=>{setHappyValue(e.target.value)}}/>
      <button disabled={!happyValue} onClick={handleClick} className="bg-red-700 px-4 py-1">Yes</button>
    </div>
  )
}
export default Happy