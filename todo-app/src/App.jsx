import { useEffect, useState } from "react";
import "./App.css";

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

// const App = () => {
//   const [counterVisible, setCounterVisible] = useState(true);
//   const [count, setCount] = useState(0); // Lifted state to App

//   useEffect(() => {
//     // Toggle visibility every 6 seconds
//     const interval = setInterval(() => {
//       setCounterVisible((counterVisible) => !counterVisible);
//     }, 6000);

//     return () => clearInterval(interval); // Cleanup interval
//   }, []);

//   useEffect(() => {
//     // Update count every second
//     const countInterval = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(countInterval); // Cleanup interval
//   }, []);

//   useEffect(() => {
//     console.log("It'll be run when ever your count variable changes "+ count)
//   })
//   return (
//     <div>
//       {counterVisible && <Counter count={count} />}
//       <h2>Counter will be invisible after a few seconds (Conditional Rendering)</h2>
//     </div>
//   );
// };

// const Counter = ({ count }) => {
//   return (
//     <div>

//       <h1>Counter: {count}</h1>
//       <button>Counter button is not {count}working at this point in time</button>
//     </div>
//   );
// };

// export default App;

//  -------------------------------------------------

// const App = () => {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     //send a request to the backend server
//      setLoading(true);
//      fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
//       async (response) => {
//         const json = await response.json();
//         setTabData(json);
//         setLoading(false);
//       }
//     );
//     // Cleanup function
//     return () => {
//       console.log("Cleanup function");
//     };
//   }, [currentTab]);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCurrentTab(1);
//         }}
//         style={{ backgroundColor: currentTab === 1 ? "blue" : "white" }}
//       >
//         Todo #1{" "}
//       </button>
//       <button
//         onClick={() => {
//           setCurrentTab(2);
//         }}
//         style={{ backgroundColor: currentTab === 2 ? "blue" : "white" }}
//       >
//         Todo #2
//       </button>
//       <button
//         onClick={() => {
//           setCurrentTab(3);
//         }}
//         style={{ backgroundColor: currentTab === 3 ? "blue" : "white" }}
//       >
//         Todo #3
//       </button>
//       <button
//         onClick={() => {
//           setCurrentTab(4);
//         }}
//         style={{ backgroundColor: currentTab === 4 ? "blue" : "white" }}
//       >
//         Todo #4
//       </button>
//       <br/>
//       { loading ? "loading": ( <div> {tabData.title} </div>)}
//     </div>
//   );
// };
// export default App;

//--------------------------------
//React children and key

export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <div
          key={1}
          style={{
            color: "green",
            fontSize: "20px",
            fontWeight: "bold",
            background: "red",
          }}
        >
          What do you want to post
          <br />
          <br />
        </div>
      </Card>
      <Card
        key={2}
        children={
          <div>
            <input type="text" placeholder="Enter your post" />
            <button style={{ color: "red" }}>Post</button>
          </div>
        }
      />
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "4px solid black",
        padding: "10px",
        margin: " 10px",
        width: "200px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
}
