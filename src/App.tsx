import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home'
import Room from './Screens/Room'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="room/:roomId" element={<Room/>}/>
      </Routes>
    </>
  )
}

export default App
