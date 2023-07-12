import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { MsalProvider } from "@azure/msal-react";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";

const configuration = {
  auth: {
    clientId: "client-id",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const pca = new PublicClientApplication(configuration);

root.render(
  <>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
