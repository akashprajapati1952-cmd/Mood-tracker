import Happy from './components/Happy.tsx'
import Sad from './components/Sad.tsx'
import HappyTracker from './components/HappyTracker.tsx'
import SadTracker from './components/SadTracker.tsx'

function App() {
  

  return (
    <div className="flex flex-col items-center">
      <HappyTracker/>
      <SadTracker/>
      <div className="flex justify-between w-screen ">
        <Happy/>
        <Sad/>
      </div>
    </div>
    

  )
}

export default App
