import Happy from './components/Happy.tsx'
import Sad from './components/Sad.tsx'
import HappyTracker from './components/HappyTracker.tsx'
import SadTracker from './components/SadTracker.tsx'
import Clear from './components/Clear.tsx'
import { Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList.tsx'
import OrderList from './components/OrderList.tsx'

function App() {
  

  return (
    <div className="flex flex-col w-full">
      <Routes>
        <Route index element={<OrderList/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/moodtracker" element={
        <div>
          <HappyTracker/>
          <SadTracker/>
          <div className="flex justify-between w-screen h-35 bg-indigo-700">
            <Happy/>
            <Clear/>
            <Sad/>
          </div>
        </div> } />
      </Routes>
    </div>
    

  )
}

export default App
