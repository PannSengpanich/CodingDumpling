import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile",
      element: <Profile />,
      children: [{ path: ":name", element: <Profile></Profile> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
