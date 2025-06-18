import { useState, useRef } from 'react'
import './App.css'

//useRef returns an object current
function App() {
  const [key, setKey] = useState(-1);
   const qaData = [
        {
            "question": "When does the website re-render in vanilla JavaScript?",
            "answer": "It doesn't re-render in the React sense. Instead, specific DOM elements are updated directly using methods like classList.add() or innerHTML."
        },
        {
            "question": "How do I toggle tab visibility with vanilla JavaScript?",
            "answer": "Use classList.add('active') and classList.remove('active') to show or hide the correct content div based on which tab was clicked."
        },
        {
            "question": "What does useRef do in React?",
            "answer": "useRef returns an object with a .current property that persists across renders without causing re-renders when updated. It's often used for storing DOM refs or mutable values like timers."
        },
        {
            "question": "How is memoization achieved in useMemo?",
            "answer": "React stores the result of a function and its dependencies. On re-render, it checks if the dependencies changed. If not, it returns the cached result instead of recomputing."
        },
        {
            "question": "What is the difference between local and global state?",
            "answer": "Local state is managed within a component using useState, while global state is shared across components and managed using libraries like Zustand or Redux."
        },
        {
            "question": "What does React.memo do?",
            "answer": "React.memo memoizes a component, preventing it from re-rendering unless its props change. It performs a shallow comparison by default."
        },
        {
            "question": "How do I implement hover-based star rating in React?",
            "answer": "Track both the selected rating and hovered rating with useState. On hover, temporarily highlight stars using conditional logic and revert to the selected rating on mouse leave."
        },
        {
            "question": "What is the purpose of data-tab in tab buttons?",
            "answer": "data-tab is a custom attribute used to store the target content ID. JavaScript reads this attribute to show the correct content when a button is clicked."
        },
        {
            "question": "Why is my interval timer not stopping in React?",
            "answer": "You must store the interval ID in a useRef so it persists across renders. Then call clearInterval(intervalRef.current) and reset it to null to stop the timer properly."
        },
        {
            "question": "How does pnpm differ from npm?",
            "answer": "pnpm uses symlinks and a global content-addressable store to save disk space and install faster. npm installs a flat node_modules structure but duplicates packages more often."
        }
      ];

      const handleClick = (index) => {
        if(key === index)
          setKey(-1);
        else
          setKey(index);
      }


  return (
    <>
      <div>
       { qaData.map((pair, index) => (
        <div>
          <p onClick={() => handleClick(index)}> <strong> {pair.question} </strong> </p>
           {index === key && <p>{pair.answer}</p>}
        </div>
          
        ))}
            
      </div>
              
    </>
  )
}

export default App
