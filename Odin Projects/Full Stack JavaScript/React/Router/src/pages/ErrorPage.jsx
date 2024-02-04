import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <h2 to="/">Go back in 3 seconds</h2>
    </div>
  );
};

export default ErrorPage;
