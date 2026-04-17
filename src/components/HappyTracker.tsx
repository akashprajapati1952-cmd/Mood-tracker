import {useSelector} from "react-redux"

export default function HappyTracker(){
  const happyCount=useSelector((state)=>state.happyCount)
  return (
    <div className="bg-indigo-700">You were happy {happyCount}  times during the day</div>
  )
}