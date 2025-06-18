import { useState } from 'react'
import './App.css'

//useRef returns an object current
function App() {
  const [stars, setStars] = useState(["☆","☆","☆","☆","☆"]);
  const handleClick = (index) => {
    setStars(stars.map((_,i) => (i <= index ? "★" : "☆")));
  }
  

  return (
    <>

      <div className="rating">
          
          {stars.map((item, index) => (
            <span 
            key = {index} 
            onClick={() => handleClick( index)}
            style={{ cursor: 'pointer' }}> 
            {item}  
            </span>
        ))}
          
      
      </div>

    </>
  )
}

export default App
