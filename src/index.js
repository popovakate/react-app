import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import WeatherSearch from "./WeatherSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <WeatherSearch />
  </StrictMode>
);
