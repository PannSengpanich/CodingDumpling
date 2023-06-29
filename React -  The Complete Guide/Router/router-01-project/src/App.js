//http://(protocol)/(path)

import {
  createBrowserRouter,
  // createRoutesfromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

//! old-version
// const routeDefinitions = createRoutesfromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/product" element={<ProductPage />}></Route>
//   </Route>
// );

// const router =createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "product", element: <ProductPage></ProductPage> },
      {
        path: "product/:productId",
        element: <ProductDetailPage></ProductDetailPage>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
