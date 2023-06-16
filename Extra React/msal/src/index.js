import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { MsalProvider } from "@azure/msal-react";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";

const configuration: Configuration = {
  auth: {
    clientId: "client-id",
  },
};

const pca = new PublicClientApplication(configuration);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* all parts of app that require authentication must be wrapped in the MsalProvider component */}
    {/* All components underneath MsalProvider will have access to the PublicClientApplication instance via context as well as all hooks and components provided by @azure/msal-react.*/}
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
