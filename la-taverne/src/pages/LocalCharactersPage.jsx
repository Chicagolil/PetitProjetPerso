import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function LocalCharactersPage() {
  const [personnages, setPersonnages] = useState([]);
  function recupererPersonnages() {
    setPersonnages(JSON.parse(localStorage.getItem("personnages")) || []);
  }

  useEffect(() => {
    recupererPersonnages();
  }, []);

  return (
    <div>
      <h1 className="text-4xl mb-6 text-center">Personnages Locaux</h1>
      <div className="flex justify-center my-8">
        <Link to="/creer-un-personnage">
          <button className="px-4 py-2 duration-300 border-2 border-neutral-800 bg-neutral-200 rounded-xl hover:bg-neutral-300">
            Créer un nouveau Personnage
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap ">
        {personnages.map((elem, index) => (
          <Card key={index} infosPerso={elem} />
        ))}
      </div>
    </div>
  );
}
