import { useState } from "react";

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
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev)=>prev+1)}>Increment</button>
      <button onClick={() => setCount((prev)=>prev-1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
