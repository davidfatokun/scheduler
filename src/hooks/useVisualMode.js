import {useState} from 'react'

// const useVisualMode = function(initial) {
//   const [mode, setMode] = useState(initial);

//   function transition(newMode){
//     setMode(newMode)
//   }

//   return { mode, transition };
// }

const useVisualMode = function(initial) {
  const [history, setHistory] = useState([initial]); 

  function transition(newMode, replace = false) {
    if(replace){
      return setHistory(prev => [...prev.slice(0, prev.length - 1), newMode])
    } else {
      return setHistory(prev => [...prev, newMode]);
    }
  }

  function back() {
    setHistory(prev => {
      if(prev.length === 1){
        return [...prev.slice(0)];
      } else {
        return [...prev.slice(0, prev.length - 1)];
      }
    })
  }

  return { mode: history[history.length -1], transition, back };
}


export default useVisualMode;