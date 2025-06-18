import { useState, useRef } from 'react'
import './App.css'

//useRef returns an object current
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
