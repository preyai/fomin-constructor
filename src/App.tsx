import { useState } from 'react'
import Dull from './components/Dull/Dull'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dull />
    </>
  )
}

export default App
