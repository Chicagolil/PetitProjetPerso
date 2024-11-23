import { useEffect, useState, useContext } from "react";
import Card from "../components/Card";
import { CharactersContext } from "../context/CharactersContext";

export default function CharactersApi() {
  const [bateau, setBateau] = useState(0);

  const { apiCharacters, setApiCharacters } = useContext(CharactersContext);

  return (
    <div>
      <h1 className="text-4xl mb-6 text-center">
        Tout les personnsages de l'api
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {apiCharacters.map((elem, index) => (
          <Card key={elem.id} infosPerso={elem} />
        ))}
      </div>
    </div>
  );
}
