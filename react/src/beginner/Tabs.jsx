import { useState, useRef } from 'react'
import './App.css'

//useRef returns an object current
function App() {

  const [tab, setTab] = useState(0);

  return (
    <>
      <div>
          <div>
            <button onClick={() => setTab(0)} >tab1</button>
            <button onClick={() => setTab(1)} >tab2</button>
            <button onClick={() => setTab(2)} >tab3</button>  
          </div>

          {tab==0 && <div>This is content for Tab 1</div>}
          {tab==1 && <div>This is content for Tab 2</div>}
          {tab==2 && <div>This is content for Tab 3</div>}
            
      </div>
              
    </>
  )
}

export default App
