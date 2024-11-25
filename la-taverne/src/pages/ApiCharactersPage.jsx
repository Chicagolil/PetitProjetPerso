import { useEffect, useState, useContext } from "react";
import Card from "../components/Card";
import { CharactersContext } from "../context/CharactersContext";
import {
  addFetchCharacters,
  addApiCharacters,
} from "../hooks/useContexteFunctions";

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
      <div className="flex justify-center items-center">
        <button
          onClick={() => addFetchCharacters(setApiCharacters)}
          className="px-4 py-2 duration-300 bg-blue-200 border-2 border-blue-800 rounded-xl my-10 hover:bg-blue-300"
        >
          Rappeler tous les personnsages de l'api
        </button>
      </div>
    </div>
  );
}
