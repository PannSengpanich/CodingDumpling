import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 }); //more customize than useState
  const number = searchParams.get("n");

  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <Link to={`/books/${number}`}>Book {number}</Link>
      <Link to="/books/new">New Book</Link>
      {/* indicate where the nested route components should be rendered */}
      <Outlet context={{ hello: "World" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}
export default BookLayout;
