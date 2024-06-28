import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Homepage from "./Frontend/Components/Homepage";
import Card from "./Frontend/Components/Card";
import SearchPage from "./Frontend/Components/SearchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Homepage/>
    },
    {
      path : "/search",
      element : <SearchPage/>
    }
  ])
  return (
    <>
      <RouterProvider router={appRouter}/>
      
   </>
  );
}

export default App;
