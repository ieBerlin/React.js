import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/products",
//     element: <Products />,
//   },
// ]);
const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
);
const router= createBrowserRouter(routerDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
