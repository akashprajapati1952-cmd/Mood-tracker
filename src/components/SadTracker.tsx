import {useSelector} from "react-redux"
export default function SadTracker(){
  const sadCount=useSelector((state)=>state.sadCount)
  return (
    <div className="bg-red-700 w-full p-5">You were sad {sadCount} times during the day</div>
  )
}