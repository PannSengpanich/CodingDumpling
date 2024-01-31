import { useEffect, useState } from "react";
import { signal, computed } from "@preact/signals-react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const counterSignal = signal(0);

  setInterval(() => {
    counterSignal.value += 1;
    console.log("interval");
  }, 1000);

  let a, b;

  useEffect(() => {
    // This runs after every render
    console.log("b");
  });

  useEffect(() => {
    // This runs only on mount (when the component appears)
  }, []);

  useEffect(() => {
    // This runs on mount *and also* if either a or b have changed since the last render
  }, [a, b]);

  // useEffect(() => {
  //   const key = setInterval(() => {
  //     setCounter((count) => count + 1);
  //   }, 1000);
  //   console.log("c");
  //   return () => {
  //     clearInterval(key);
  //   };
  // }, []);
  console.log("a");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{counterSignal} seconds have passed.</p>
    </>
  );
}

export default App;
