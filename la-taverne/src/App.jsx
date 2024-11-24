import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CharactersApi from "./pages/ApiCharactersPage";
import Errorpage from "./pages/ErrorPage";
import CreateCharacter from "./pages/CreateCharacter";
import LocalCharactersPage from "./pages/LocalCharactersPage";
import SpreadOp from "./pages/SpreadOp";
import AllCharacters from "./pages/AllCharacters";
import ModifyCharacter from "./pages/ModifyCharacter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/personnages-api", element: <CharactersApi /> },
      { path: "/creer-un-personnage", element: <CreateCharacter /> },
      { path: "/personnages-locaux", element: <LocalCharactersPage /> },
      { path: "/tous-les-personnages", element: <AllCharacters /> },
      { path: "/spread", element: <SpreadOp /> },
      { path: "/*", element: <Errorpage /> },
      { path: "/modification-personnage/:id", element: <ModifyCharacter /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
