import { useState } from "react";
import "./App.css";
import { Link, useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  console.log("rerender");
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile/">Profile page</Link>
          </li>
          <li>
            <Link to="profile/popeye">Popeye Profile page</Link>
          </li>
          <li>
            <Link to="profile/spinach">Spinach Profile page</Link>
          </li>
          <li>
            <input
              type="text"
              value={number}
              onChange={(e) => setSearchParams({ n: e.target.value })}
            ></input>
            {number}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
