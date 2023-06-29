import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/product");
  }
  return (
    <>
      <h1>My Home</h1>
      {/* page refresh, current page state is lost
      <p>
        Go to <a href="/products"> the list of products</a>
      </p> */}
      <p>
        Go to <Link to="/product"> the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
export default HomePage;
