import { Link } from "react-router-dom";


export default function ChartNavBar() {
  return (
    <ul className="nav nav-pills m-2 ms-2">
      <li className="nav-item">
        <Link to={'/'}>
          <button type="button" className="mx-1 btn btn-outline-secondary py-1" title="Home">
            <i className="fa fa-home" aria-hidden="true"></i>
          </button>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <button type="button" className="mx-1 btn btn-outline-secondary py-1" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Symbol">
          <i className="fa fa-usd" aria-hidden="true"></i>
        </button>
        <ul className="dropdown-menu">
          <li className="btn dropdown-item">GBP/JPY</li>
          <li className="btn dropdown-item">EUR/USD</li>
          <li className="btn dropdown-item">XAU/USD</li>
        </ul>
      </li>
      <li className="nav-item">
        <button type="button" className="mx-1 btn btn-outline-secondary py-1" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Time Frame">
          <strong>D</strong>
        </button>
        <ul className="dropdown-menu">
          <li className="btn dropdown-item">5 Minutes</li>
          <li className="btn dropdown-item">15 Minutes</li>
          <li className="btn dropdown-item">1 Hour</li>
          <li className="btn dropdown-item">4 Hours</li>
          <li className="btn dropdown-item">Daily</li>
          <li className="btn dropdown-item">Weekly</li>
          <li className="btn dropdown-item">Mounthly</li>
        </ul>
      </li>
      <li className="nav-item">
        <button type="button" className="mx-1 btn btn-outline-secondary py-1" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Display Mode">
          <i className="fa fa-area-chart" aria-hidden="true"></i>
        </button>
        <ul className="dropdown-menu">
          <li className="btn dropdown-item">Lines</li>
          <li className="btn dropdown-item">Candles</li>
          <li className="btn dropdown-item">OHLC</li>
        </ul>
      </li>
      <li className="nav-item">
        <button type="button" className="mx-1 btn btn-outline-secondary py-1" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Indicators">
          <i className="fa fa-tachometer" aria-hidden="true"></i>
        </button>
        <ul className="dropdown-menu">
          <li className="btn dropdown-item">EMA</li>
          <li className="btn dropdown-item">SMA</li>
          <li className="btn dropdown-item">MACD</li>
          <li className="btn dropdown-item">RSI</li>
          <li className="btn dropdown-item">ATR</li>
          <li className="btn dropdown-item">Volume</li>
        </ul>
      </li>
      <li className="nav-item">
        <button type="button" className="mx-1 btn btn-outline-secondary py-1" data-bs-toggle="dropdown" role="button" aria-expanded="false" title="Strategies">
        <i className="fa fa-fort-awesome" aria-hidden="true"></i>
        </button>
        <ul className="dropdown-menu">
          <li className="btn dropdown-item">Startegy 1</li>
          <li className="btn dropdown-item">Startegy 2</li>
          <li className="btn dropdown-item">Startegy 3</li>
          <li className="btn dropdown-item">...</li>
        </ul>
      </li>
      <li className="nav-item">
        <button type="button" className="mx-1 btn btn-outline-secondary py-1" title="Play Animation">
        <i className="fa fa-forward" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  )
}
