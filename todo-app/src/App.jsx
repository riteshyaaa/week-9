import { useEffect, useState, } from 'react'
import './App.css'



// export default function App () {
//   const [ count, setCount ] =  useState(0)
//    useEffect (() => {
//     document.title = `You clicked ${count} times`
//     return () => {
//       document.title = 'Counter App'
//     }
//   })

//   return(
//     <div>
//       <h1> Counter App </h1>
//       <h2> Counter {count}</h2>
//       <button onClick =  {() => setCount(count+1)}> Increament </button>
//       <button onClick = { () => setCount(count-1)}> Decremment </button>
//       <button onClick = { () => setCount(0)}> Reset </button>
//     </div>
//   )
// }


// const App =  () => {
// const [CounterVisible, setCounterVisible ] =  useState(true);

// useEffect(() => {
//   setInterval ( () => {
//     setCounterVisible(CounterVisible => !CounterVisible) 
//   },6000 )
    
//   },[]) 

//   return(
//     <div>
//         { CounterVisible && <Counter /> }
//         <h2>  Counter will invisible after   sec (Conditional rendering) </h2>
         
     
//     </div>
//   )
// }


// const  Counter =  () => {

//   const [count, SetCount] =  useState(0)

//   useEffect( () => {
    
//   setInterval( () => {
//     SetCount( count => count +1)
//   },1000)

//   }, [])
//   return(
//     <div>
//       <h1> Counter {count}</h1>
//       <button> Counter button is not working at this point of time </button>
      
//     </div>
//   )


// }
// export default App


const App = () => {
  const [counterVisible, setCounterVisible] = useState(true);
  const [count, setCount] = useState(0); // Lifted state to App

  useEffect(() => {
    // Toggle visibility every 6 seconds
    const interval = setInterval(() => {
      setCounterVisible((counterVisible) => !counterVisible);
    }, 6000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  useEffect(() => {
    // Update count every second
    const countInterval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(countInterval); // Cleanup interval
  }, []);

  return (
    <div>
      {counterVisible && <Counter count={count} />}
      <h2>Counter will be invisible after a few seconds (Conditional Rendering)</h2>
    </div>
  );
};

const Counter = ({ count }) => {
  return (
    <div>
      
      <h1>Counter: {count}</h1>
      <button>Counter button is not {count}working at this point in time</button>
    </div>
  );
};

export default App;
