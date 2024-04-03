import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Link type="button" className="btn btn-primary m-1" to={'/chart-viwer'}>
        <i className="fa fa-bar-chart me-2 mb-2" aria-hidden="true"></i>
        Chart Viwer
      </Link>
      <Link type="button" className="btn btn-secondary m-1" to={'/screener-forex'}>
        <i className="fa fa-table me-2 mb-2" aria-hidden="true"></i>
        Screener Forex
      </Link>
      <Link type="button" className="btn btn-success m-1" to={'/strategy-lab'}>
        <i className="fa fa-industry me-2 mb-2" aria-hidden="true"></i>
        Strategy Lab
      </Link>
    </>
  )
}
