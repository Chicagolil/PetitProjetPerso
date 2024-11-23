import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/style/index.css";
import "./assets/style/custom.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CharactersContextProvider, {
  CharactersContext,
} from "./context/CharactersContext.jsx";

createRoot(document.getElementById("root")).render(
  <CharactersContextProvider>
    <App />
  </CharactersContextProvider>
);
