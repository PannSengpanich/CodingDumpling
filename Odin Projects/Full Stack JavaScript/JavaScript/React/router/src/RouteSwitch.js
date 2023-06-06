import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Intro from "./Intro";
import App from "./App";
import Profile from "./Profile";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import NotFound from "./NotFound";
import BookLayout from "./BookLayout";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      {/* Renders the first child Route that matches the location.*/}
      <nav>
        <ul>
          <li>
            <Link to="/intro">Intro</Link>
          </li>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/*component that should be rendered when we navigate to this url.*/}
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />}></Route>
          <Route path=":id" element={<Book />}></Route>
          <Route path="new" element={<NewBook />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
