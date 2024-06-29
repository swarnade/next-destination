import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Frontend/Components/Homepage";
import Card from "./Frontend/Components/Card";
import SearchPage from "./Frontend/Components/SearchPage";
import Weather from "./backend/Weather/Weather";
import WeatherCard from "./Frontend/Components/WeatherCard";
import WeatherPage from "./Frontend/Components/WeatherPage";
import EachResturants from "./Frontend/Components/EachResturants";

function App() {
  const weatherData = {};
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
      path: "/weather/:place",
      element: <WeatherPage />,
    },
    {
      path: "/nearest",
      element: <Card />,
    },
    {
      path: "/id/restaurant",
      element: <EachResturants />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
