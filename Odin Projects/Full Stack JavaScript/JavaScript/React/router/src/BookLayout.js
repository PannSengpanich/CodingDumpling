import { Link, Outlet } from "react-router-dom";
function BookLayout() {
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <Link to="/books/new">New Book</Link>
      {/* indicate where the nested route components should be rendered */}
      <Outlet context={{ hello: "World" }} />
    </>
  );
}
export default BookLayout;
