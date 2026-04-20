import {useSelector} from "react-redux"
export default function SadTracker(){
  const sadMoment=useSelector((state)=>state.sadMoment)
  return (
    sadMoment.length === 0 ||
    (<div className="bg-red-700 w-dvw p-5 ">
      {sadMoment.map((m)=>(<div>Sad Intensity: {m.count}, when: {m.when}</div>))}
    </div>)
  )
}