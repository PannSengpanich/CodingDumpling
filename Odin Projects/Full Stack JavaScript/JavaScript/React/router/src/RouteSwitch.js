import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      {/* Renders the first child Route that matches the location.*/}
      <Routes>
        {/*component that should be rendered when we navigate to this url.*/}
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
