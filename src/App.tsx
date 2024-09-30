import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* [FIXED_CONTENT] */}

      <nav>
        <Link to="/sg-elections/">Home</Link>
        {" | "}
        <Link to="/sg-elections/contact">Contact</Link>
      </nav>

      <Outlet />
      {/* [FIXED_CONTENT] */}
    </>
  )
}

export default App
