import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AllCharacters from "./pages/AllCharacters";
import Errorpage from "./pages/ErrorPage";
import CreateCharacter from "./pages/CreateCharacter";
import LocalCharactersPage from "./pages/LocalCharactersPage";
import SpreadOp from "./pages/SpreadOp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/tous-les-personnages", element: <AllCharacters /> },
      { path: "/creer-un-personnage", element: <CreateCharacter /> },
      { path: "/personnages-locaux", element: <LocalCharactersPage /> },
      { path: "/spread", element: <SpreadOp /> },
      { path: "/*", element: <Errorpage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
