import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Homepage from "./Frontend/Components/Homepage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Homepage/>
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
