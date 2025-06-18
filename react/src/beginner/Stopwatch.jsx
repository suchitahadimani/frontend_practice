import { useState, useRef } from 'react'
import './App.css'

//useRef returns an object current
function App() {
  const [time, setTime] = useState(0);
  let interval = useRef(null);


  const start_timer = () => {
    if(interval.current != null)
      return;
    
    let start = Date.now()
    interval.current = setInterval(()=>{
      setTime((time) => (time + (Date.now() - start)/1000));
      start = Date.now();
    }, 100)
  }

  const stop_timer = () => {
    clearInterval(interval.current);
    interval.current = null;
  }

 

  return (
    <>

      <div className="stopwatch">

        <p>{time.toFixed(2)}</p>

        <button onClick={start_timer}>
          start
        </button>

        <button onClick={stop_timer}>
          stop
        </button>
      </div>

    </>
  )
}

export default App
