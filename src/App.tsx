import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/Navbar'

function App() {
  return (
    <>
      {/* [FIXED_CONTENT] */}

      <NavBar />

      <Outlet />
      {/* [FIXED_CONTENT] */}
    </>
  )
}

export default App
