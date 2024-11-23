import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import Card from "../components/Card";

export default function AllCharacters() {
  const { allCharacters } = useContext(CharactersContext);
  console.log(allCharacters);
  return (
    <>
      <h1 className="text-4xl mb-6 text-center">Tout les personnages</h1>;
      <div className="flex flex-wrap justify-center gap-8">
        {allCharacters.map((elem, index) => (
          <Card key={elem.id} infosPerso={elem} />
        ))}
      </div>
    </>
  );
}
