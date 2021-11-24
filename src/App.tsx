import { useState } from 'react'
import logo from './logo.svg'
import './APP.css'
import { Header } from './components/header'
import { MainSection } from './components/mainsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <MainSection />
    </div>
  )
}

export default App
