import { useEffect, useState } from "react";

import "./App.css";

function App() {
  // conditional rendering

  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    console.log("mounted 02");
    let clock = setInterval(() => {
      setCounterVisible((counterVisible) => !counterVisible);
    }, 5000);
    // this will never be unmounted 
    return function () {
      console.log("unmounted 02");
      clearInterval(clock);
    };
  }, []);

  return (
    <>
      <b>hi react</b>
      <button onClick={() => setCounterVisible(!counterVisible)}>
        Toggle Counter
      </button>
      {counterVisible ? <Counter /> : null}
      {/* {counterVisible && <Counter />} */}
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

  console.log("count");

  // mount
  // this will guard setInterval against re-rendering
  useEffect(() => {
    console.log("mounted 01");
    let clock = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // cleanup
    return function () {
      console.log("unmounted 01");
      clearInterval(clock);
    };
  }, []);


  // basically the code we write in the useEffect is used at the time of mounting and ignore during the re-rendering and the function we return here in useEffect is called at the time of unmounting 

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={() => setCount((prev)=>prev+1)}>Increment</button>
      <button onClick={() => setCount((prev)=>prev-1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
    </div>
  );
};
