import { useState } from 'react'
import { Route } from 'react-router-dom'
import MainRoute from './Routes/MainRoute'
import Navbar from './Components/Navbar'
import Details from './Components/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
  <MainRoute/>
    </>
  )
}

export default App
