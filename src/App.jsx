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
      
      <div className="flex flex-wrap justify-center items-center p-4 bg-gray-100">
      
      <Card 
        title=" "
        image="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
        description="A stunning skyline of a bustling city."
      />
      <Card 
        title=" "
        image="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
        description="A stunning skyline of a bustling city."
      />
      <Card 
        title=" "
        image="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
        description="A stunning skyline of a bustling city."
      />
    </div>
    </>
  );
}

export default App;
