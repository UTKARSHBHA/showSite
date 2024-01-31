import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import ShowSummary from "./components/ShowSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "show/:id",
    element: <ShowSummary/>,
  }
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App