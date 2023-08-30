import { useState } from 'react'
import './App.css'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Contact />
    </main>
  )
}

export default App
