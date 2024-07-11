import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementCanVary } from './redux/reducer/counterSlice'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)
  //how to access a global state
  //dispatch the action
  //for invoking the action
  

  
  // make a new slice with initial state as your name and show it on the redux devtools
  //practice question
  
  

  
  //we cannot call an action directly
  
  
  //extract your name from the redux store and log it/render it
  const myState = useSelector((state)=>(state.cipher.value))
  const dispatch = useDispatch();

  console.log(myState);












//make the decrement action call

//practice question







//I want to increment by a variable no.
//1,10,100,66,

///action call only takes 1 argument



//action in reducer is used for passing variable data as an argument


















//make  a decrement for a variable number


// make 3 buttons 
// 1st button decrement by 2
// 2nd button decrement by 10
// 3rd button decrement by 30

//practice question







  return (
    <>
      <p>{myState}</p>
       <button onClick={()=>dispatch(incrementCanVary(12))}>add 10</button> 
    </>
  )
}

export default App
