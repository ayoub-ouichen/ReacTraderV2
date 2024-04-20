import { Link } from "react-router-dom"
import { priceData, setParams } from "../../features/price/priceSlice"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchSMA, SMAData } from "../../features/indicators/SMA_Slice"

interface Params {
  from_date: string
  to_date: string
  time_frame: string
  symbol: string
  mode: string
  period: string
} 

export default function ChartNavBar() {
  const price = useAppSelector(priceData)
  const sma = useAppSelector(SMAData)
  const dispatch = useAppDispatch()

  function changeSet(value: string, category: keyof Params ) {
    let params = Object.assign({}, price.params)
    params[category] = value
    dispatch(setParams(params))
  }

  function addIndicator(name: string) {
    switch (name) {
      case 'SMA':
        console.log(sma.params);
        dispatch(fetchSMA(sma.params))
        break;
    
      default:
        break;
    }
  }
  
  return (
    <div style={{width: '100%', height: '100%', position: 'absolute'}}>
      <ul className="nav nav-pills p-1">
        <li className="nav-item">
          <Link to={'/'}>
            <button type="button" className="btn m-1 rt-btn-nav btn-outline text-dark" title="Home">
            <i className="bi bi-house-door h4"></i>
            </button>
          </Link>
        </li>
        <div className="vr"></div>
        <li className="nav-item dropdown">
          <button type="button" className="btn m-1 rt-btn-nav btn-outline-light text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Symbol">
          <i className="bi bi-coin h4"></i>
          </button>
          <ul className="dropdown-menu">
            <li className="btn dropdown-item">GBP/JPY</li>
            <li className="btn dropdown-item">EUR/USD</li>
            <li className="btn dropdown-item">XAU/USD</li>
          </ul>
        </li>
        <div className="vr"></div>
        <li className="nav-item dropdown">
          <button type="button" className="btn m-1 rt-btn-nav btn-outline-light text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Time Frame">
          <i className="bi bi-stopwatch h4"></i>
          </button>
          <ul className="dropdown-menu">
            <li className="btn dropdown-item" onClick={() => changeSet('M5', 'time_frame')}>5 Minutes</li>
            <li className="btn dropdown-item" onClick={() => changeSet('M15', 'time_frame')}>15 Minutes</li>
            <li className="btn dropdown-item" onClick={() => changeSet('H1', 'time_frame')}>1 Hour</li>
            <li className="btn dropdown-item" onClick={() => changeSet('H4', 'time_frame')}>4 Hours</li>
            <li className="btn dropdown-item" onClick={() => changeSet('D1', 'time_frame')}>Daily</li>
            <li className="btn dropdown-item" onClick={() => changeSet('W1', 'time_frame')}>Weekly</li>
            <li className="btn dropdown-item" onClick={() => changeSet('MN1', 'time_frame')}>Mounthly</li>
          </ul>
        </li>
        <div className="vr"></div>
        <li className="nav-item dropdown">
          <button type="button" className="btn m-1 rt-btn-nav btn-outline-light text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Display Mode">
          <i className="bi bi-bar-chart-line h4"></i>
          </button>
          <ul className="dropdown-menu">
            <li className="btn dropdown-item">Lines</li>
            <li className="btn dropdown-item">Candles</li>
            <li className="btn dropdown-item">OHLC</li>
          </ul>
        </li>
        <div className="vr"></div>
        <li className="nav-item dropdown">
          <button type="button" className="btn m-1 rt-btn-nav btn-outline-light text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Indicators">
          <i className="bi bi-speedometer2 h4"></i>
          </button>
          <ul className="dropdown-menu">
            <li className="btn dropdown-item">EMA</li>
            <li className="btn dropdown-item" onClick={() => addIndicator('SMA')}>SMA</li>
            <li className="btn dropdown-item">MACD</li>
            <li className="btn dropdown-item">RSI</li>
            <li className="btn dropdown-item">ATR</li>
            <li className="btn dropdown-item">Volume</li>
          </ul>
        </li>
        <div className="vr"></div>
        <li className="nav-item dropdown">
          <button type="button" className="btn m-1 rt-btn-nav btn-outline-light text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Strategies">
          <i className="bi bi-crosshair h4"></i>
          </button>
          <ul className="dropdown-menu">
            <li className="btn dropdown-item">Startegy 1</li>
            <li className="btn dropdown-item">Startegy 2</li>
            <li className="btn dropdown-item">Startegy 3</li>
            <li className="btn dropdown-item">...</li>
          </ul>
        </li>
        <div className="vr"></div>
        <li className="nav-item dropdown">
          <button type="button" className="btn m-1 rt-btn-nav btn-outline-light text-dark" title="Play Animation">
          <i className="bi bi-play-circle h4"></i>
          </button>
        </li>
        <div className="vr"></div>
        <li className="nav-item dropdown">
          <button type="button" className="btn m-1 rt-btn-nav btn-outline-light text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Period">
          <i className="bi bi-hourglass h4"></i>
          </button>
          <ul className="dropdown-menu">
            <li className="btn dropdown-item" onClick={() => changeSet('50', 'period')}>50 units</li>
            <li className="btn dropdown-item" onClick={() => changeSet('100', 'period')}>100 units</li>
            <li className="btn dropdown-item" onClick={() => changeSet('200', 'period')}>200 units</li>
            <li className="btn dropdown-item" onClick={() => changeSet('300', 'period')}>300 units</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
