import {useSelector} from "react-redux"

export default function HappyTracker(){
  const happyMoment=useSelector((state)=>state.happyMoment)
  return (
    happyMoment.length === 0 ||
    (<div className="bg-green-700 w-dvw p-5">
      {happyMoment.map((m)=>(<div>Happy Intensity: {m.count}, when: {m.when}</div>))}
    </div>)
  )
}