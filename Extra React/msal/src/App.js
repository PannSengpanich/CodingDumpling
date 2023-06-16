import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";

export function App() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <React.Fragment>
      <p>Anyone can see this paragraph.</p>
      {isAuthenticated && <p>At least one account is signed in!</p>}
      {!isAuthenticated && <p>No users are signed in!</p>}
    </React.Fragment>
  );
}

export default App;
