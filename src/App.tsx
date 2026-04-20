import Happy from './components/Happy.tsx'
import Sad from './components/Sad.tsx'
import HappyTracker from './components/HappyTracker.tsx'
import SadTracker from './components/SadTracker.tsx'
import Clear from './components/Clear.tsx'

function App() {
  

  return (
    <div className="flex flex-col w-full">
      <HappyTracker/>
      <SadTracker/>
      <div className="flex justify-between w-screen h-35 bg-indigo-700">
        <Happy/>
        <Clear/>
        <Sad/>
      </div>
      
    </div>
    

  )
}

export default App
