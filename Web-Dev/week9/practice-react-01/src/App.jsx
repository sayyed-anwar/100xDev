import { useEffect, useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <b>hi react</b>
      <Counter />
    </>
  );
}

export default App;

const Counter = () => {
  const [count, setCount] = useState(0);


  // it will re-render the count state 

// setInterval(()=>{
//   setCount(count+1)
// },1000)

console.log("count")

// mount 
// this will guard setInterval against re-rendering
useEffect(()=>{
  setInterval(()=>{
    setCount((prev)=>prev+1)
  },1000);
  console.log("mounted")
},[])

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={() => setCount((prev)=>prev+1)}>Increment</button>
      <button onClick={() => setCount((prev)=>prev-1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
    </div>
  );
};
