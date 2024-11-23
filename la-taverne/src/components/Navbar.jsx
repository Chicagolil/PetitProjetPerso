import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const liens = [
    { texte: "Accueil", chemin: "/" },
    { texte: "Tous les personnages ", chemin: "/tous-les-personnages" },

    { texte: "Personnages Locaux", chemin: "/personnages-locaux" },
  ];
  return (
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justify-between mx-auto ">
        <Link to="/">La taverne des combattans</Link>
        <div className="flex gap-3">
          {liens.map((elem, index) => (
            <NavLink
              key={index}
              to={elem.chemin}
              className={({ isActive }) =>
                `text-xl ${isActive ? "underline text-purple-600" : " "}`
              }
            >
              {elem.texte}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
