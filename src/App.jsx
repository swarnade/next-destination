import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Frontend/Components/Homepage";
import Card from "./Frontend/Components/Card";
import SearchPage from "./Frontend/Components/SearchPage";
import Weather from "./backend/Weather/Weather";
import WeatherCard from "./Frontend/Components/WeatherCard";
import WeatherPage from "./Frontend/Components/WeatherPage";
import EachResturants from "./Frontend/Components/EachResturants";
import Hotel from "./backend/Hotels/Hotel";
import Test from "./backend/Map/test";

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
      element: <WeatherPage />,
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
