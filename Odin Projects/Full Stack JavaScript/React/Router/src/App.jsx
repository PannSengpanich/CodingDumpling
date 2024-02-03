import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
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
        </ul>
      </nav>
    </div>
  );
}

export default App;
