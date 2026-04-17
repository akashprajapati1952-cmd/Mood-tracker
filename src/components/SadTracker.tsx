import {useSelector} from "react-redux"
export default function SadTracker(){
  const sadCount=useSelector((state)=>state.sadCount)
  return (
    <div className="bg-red-700">You were sad {sadCount} times during the day</div>
  )
}