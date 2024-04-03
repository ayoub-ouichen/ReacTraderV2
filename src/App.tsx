import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ChartViwer from './Pages/Chart Viwer/ChartViwer'
import ScreenerForex from './Pages/Screener Forex/ScreenerForex'
import StrategyLab from './Pages/Strategy Lab/StrategyLab'

function App() {

  return (
    <Routes>
      <Route path="/chart-viwer" element={<ChartViwer />} />
      <Route path="/screener-forex" element={<ScreenerForex />}/>
      <Route path="/strategy-lab" element={<StrategyLab />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
