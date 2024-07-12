import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, increment, incrementCanVary } from './redux/reducer/counterSlice'
import Test from './Test'
import { newVar } from './redux/thunk/newThunk'

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




//action.payload-=> dynmic data
















/// redux thunk
//middleware



// normal async function and you don't need to create an extra action to get the data inside your redux store 
//APi calls

//write logics
//functionalities








// in APP.jsx 
//7-8 API calls



// 7-8 same 


//1function 
// get the data , name the variables -8 




//disptch calls and actions






function fetch() {
  // API call 

  // weather app 
  
  // response data 
  //local state
  //redux or my global state
  
  //action call
  
  //updating my state

const obj = {id:"32",asd:"asd"}

dispatch(newVar(obj))

}


useEffect(() => {
  
  fetch()
  
}, [])



//actions calls with API's

// /first argument 











//make your own thunk pass your subject name and reg no. to the thunk 
//and store the coming data in the store in a reducer 
//make the thunk call

//practice question













return (
    <>
      <p>{myState}</p>
       <button onClick={()=>dispatch(incrementCanVary(12))}>add 10</button> 
    </>
  )
}

export default App
