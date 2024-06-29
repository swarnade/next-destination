import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Frontend/Components/Homepage";
import Card from "./Frontend/Components/NearbyComp";
import SearchPage from "./Frontend/Components/SearchPage";
import Displaypage from "./Frontend/Components/Displaypage";
import Hotel from "./backend/Hotels/Hotel";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/nearest",
      element: <Card />,
    },
    {
      path: "/hotel",
      element: <Hotel />,
    },
    {
      path: "/place/:place",
      element: <Displaypage />,
    },
    {
      path: "/id/restaurant",
      element: <EachResturants />,
    },
    {
      path: "/hotels",
      element: <Hotel />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
