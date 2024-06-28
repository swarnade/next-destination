import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './Frontend/Component/HomePage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element :<HomePage/>,
    }
    
  ])

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
