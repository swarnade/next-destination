import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Homepage from "./Frontend/Components/Homepage";
import Card from "./Frontend/Components/Card";

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
