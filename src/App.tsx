import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      {/* [FIXED_CONTENT] */}

      <nav>
        <Link to="/sg-elections/">Home</Link>
        <Link to="/sg-elections/data">Data</Link>
        <Link to="/sg-elections/references">References</Link>
      </nav>

      <Outlet />
      {/* [FIXED_CONTENT] */}
    </>
  )
}

export default App
