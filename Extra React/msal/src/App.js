import React from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

export function App() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <p>Anyone can see this paragraph.</p>
      {isAuthenticated && <p>At least one account is signed in!</p>}
      {!isAuthenticated && <p>No users are signed in!</p>}
      <button onClick={() => instance.loginPopup()}>Login</button>
    </>
  );
}

export default App;
