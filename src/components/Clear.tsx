import { useDispatch} from 'react-redux'
export default function Clear(){
  const dispatch= useDispatch()
  const action= {type: "clear"}
  function handleClick(){
    dispatch(action)
  }
  return( <div  className="bg-indigo-700  self-center h-full flex items-center"><button onClick={handleClick} className="p-5 bg-red-700 px-4 py-1 m-5">clear</button></div>)
}