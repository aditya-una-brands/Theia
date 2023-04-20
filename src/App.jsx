import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DailyTurnOverPage from './Components/DailyTurnOverPage/DailyTurnOverPage'
import Apex from './Components/Apex/Apex'
function App() {
  document.title="Theia"
  return (
    <div className="App">
      <DailyTurnOverPage/>
      <Apex/>
    </div>
  )
}

export default App
